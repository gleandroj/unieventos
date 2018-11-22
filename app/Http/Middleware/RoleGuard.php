<?php

namespace UniEventos\Http\Middleware;

use Closure;
use UniEventos\Exceptions\AuthException;

class RoleGuard
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \Closure $next
     * @return mixed
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function handle($request, Closure $next, ...$roles)
    {
        if (!empty($roles) && (!($user = $request->user()) || empty($user->role) || empty(array_intersect($roles, [$user->role])))) {
            throw AuthException::unauthorized();
        }

        return $next($request);
    }
}
