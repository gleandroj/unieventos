<?php

namespace UniEventos\Http\Controllers\Auth;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;
use League\OAuth2\Server\AuthorizationServer;
use League\OAuth2\Server\Exception\OAuthServerException;
use Psr\Http\Message\ServerRequestInterface;
use UniEventos\Http\Controllers\Controller;
use UniEventos\Support\Exceptions\ApiException;
use Zend\Diactoros\Response as Psr7Response;
use UniEventos\Models\User;
use Zend\Diactoros\ServerRequest;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    /**
     * Handle a login request to the application.
     *
     * @param  ServerRequestInterface $request
     * @return mixed
     *
     * @throws ApiException
     */
    public function login(ServerRequestInterface $request)
    {
        return $this->withErrorHandling(function () use ($request) {
            $httpRequest = request();
            $this->validateLogin($httpRequest);
            $credentials = $this->credentials($httpRequest);

            $psrResponse = app(AuthorizationServer::class)->respondToAccessTokenRequest(
                $request->withParsedBody($credentials), new Psr7Response
            );

            return $this->convertResponse(
                $psrResponse
            );
        });
    }

    /**
     * Handle a refresh token request to the application.
     *
     * @param  ServerRequestInterface $request
     * @return mixed
     *
     * @throws ApiException
     */
    public function refresh(ServerRequestInterface $request)
    {
        return $this->withErrorHandling(function () use ($request) {
            $httpRequest = request();
            $this->validateRefresh($httpRequest);
            $credentials = array_merge(
                $httpRequest->only('refresh_token'),
                $this->passwordClient(),
                [
                    'grant_type' => 'refresh_token'
                ]
            );
            $psrResponse = app(AuthorizationServer::class)->respondToAccessTokenRequest(
                $request->withParsedBody($credentials), new Psr7Response
            );
            return $this->convertResponse($psrResponse);
        });
    }

    /**
     * Validate the user login request.
     *
     * @param  Request $request
     * @return void
     */
    protected function validateLogin(Request $request)
    {
        $this->validate($request, [
            'email' => 'required|string',
            'password' => 'required|string',
        ]);
    }

    /**
     * @param Request $request
     */
    protected function validateRefresh(Request $request)
    {
        $this->validate($request, [
            'refresh_token' => 'required|string'
        ]);
    }

    /**
     * Get the needed authorization credentials from the request.
     *
     * @param  \Illuminate\Http\Request $request
     * @return array
     */
    protected function credentials(Request $request)
    {
        $data = $request->only('email', 'password');

        return array_merge([
            'username' => $data['email'],
            'password' => $data['password'],
            'grant_type' => 'password'
        ], $this->passwordClient());
    }

    /**
     * @return array
     */
    protected function passwordClient()
    {
        return [
            'client_id' => env('PASSWORD_CLIENT_ID'),
            'client_secret' => env('PASSWORD_CLIENT_SECRET')
        ];
    }

    /**
     * Log the user out of the application.
     *
     * @param  \Illuminate\Http\Request $request
     * @return array
     */
    public function logout(Request $request)
    {
        return [
            'success' => $request->user()->token()->revoke()
        ];
    }

    /**
     * @param \Closure $callback
     * @return mixed
     * @throws ApiException
     */
    private function withErrorHandling(\Closure $callback)
    {
        try {
            return $callback();
        } catch (OAuthServerException $exception) {
            throw new ApiException(
                $exception->getErrorType(),
                $exception->getMessage(),
                $exception->getHttpStatusCode(),
                [
                    'hint' => $exception->getHint()
                ]
            );
        }
    }

    /**
     * @param Psr7Response $psrResponse
     * @return Response
     */
    private function convertResponse(Psr7Response $psrResponse)
    {
        return new Response(
            $psrResponse->getBody(),
            $psrResponse->getStatusCode(),
            $psrResponse->getHeaders()
        );
    }
}
