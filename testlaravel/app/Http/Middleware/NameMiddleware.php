<?php

namespace App\Http\Middleware;

use Closure;

class NameMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {   
        // $reponse = $next($request);
        if($request->input('username') !== 'anh loi'){
            return redirect('login');
        }

        // echo 'hihi';
        // return $reponse;
        return $next($request);
    }
}
