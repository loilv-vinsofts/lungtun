<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class LoginController extends Controller
{
   function getFrom(){
       return view('demo');
   }

   function handleFrom(Request $request){
            $name = $request->input('username');
            return view('name',['name'=>$name]);
   }
}
