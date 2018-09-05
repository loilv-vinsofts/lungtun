<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Hash;
use Illuminate\Support\Facades\Auth; 

class UserController extends Controller
{
    //
    public $successStatus = 200;

    public function login(Request $request){ 
        if(Auth::attempt(['email' => $request->email, 'password' => $request->password])){ 
            $user = Auth::User(); 
            $success['token'] =  $user->createToken('MyApp')-> accessToken; 
            return response()->json(['success' => $success], $this-> successStatus); 
        } 
        else{ 
            return response()->json(['error'=>'Unauthorised'], 401); 
        } 
    }

    public function register(Request $request){
        $user = new User();

        $user ->name        = $request->name;
        $user ->email       = $request->email;
        $user ->password    = Hash::make($request->password);
        $user ->save();

        return response()->json([
            'status'    => 200,
            'message'   => 'User created successfully',
            'data'=>$user
        ]);
    }
}
