<?php

namespace UniEventos\Exceptions;

use Exception;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Illuminate\Session\TokenMismatchException;
use Illuminate\Validation\ValidationException;
use UniEventos\Support\Exceptions\ApiException;

class Handler extends ExceptionHandler
{
    /**
     * A list of the exception types that are not reported.
     *
     * @var array
     */
    protected $dontReport = [
        ApiException::class
    ];

    /**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * @var array
     */
    protected $dontFlash = [
        'password',
        'password_confirmation',
    ];

    /**
     * Report or log an exception.
     *
     * @param  \Exception $exception
     * @return void
     * @throws Exception
     */
    public function report(Exception $exception)
    {
        parent::report($exception);
    }

    /**
     * Render an exception into an HTTP response.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \Exception $exception
     * @return \Illuminate\Http\Response
     */
    public function render($request, Exception $exception)
    {
        if ($exception instanceof ModelNotFoundException) {
            return (new ApiException(
                'ModelNotFoundException',
                $exception->getMessage(),
                404
            ))->toResponse($request);
        } elseif ($exception instanceof AuthorizationException) {
            return (new ApiException(
                'AuthorizationException',
                $exception->getMessage(),
                403
            ))->toResponse($request);
        } elseif ($exception instanceof TokenMismatchException) {
            return (new ApiException(
                'TokenMismatchException',
                $exception->getMessage(),
                4019
            ))->toResponse($request);
        }

        return parent::render($request, $exception);
    }

    /**
     * Convert an authentication exception into a response.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \Illuminate\Auth\AuthenticationException $exception
     * @return \Illuminate\Http\Response
     */
    protected function unauthenticated($request, AuthenticationException $exception)
    {
        return (new ApiException(
            'AuthenticationException',
            $exception->getMessage(),
            401
        ))->toResponse($request);
    }

    /**
     * Create a response object from the given validation exception.
     *
     * @param  ValidationException $e
     * @param  \Illuminate\Http\Request $request
     * @return \Symfony\Component\HttpFoundation\Response
     */
    protected function convertValidationExceptionToResponse(ValidationException $e, $request)
    {
        return (new ApiException(
            'ValidationException',
            $e->getMessage(),
            $e->status,
            $e->errors()
        ))->toResponse($request);
    }
}
