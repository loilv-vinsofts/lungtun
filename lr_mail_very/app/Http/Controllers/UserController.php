<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Hash;
use Mail;
use Auth;
use App\Http\Requests\UserRequest;
class UserController extends Controller
{
    //

    public function addUser(UserRequest $request){
        $confirm_code   = str_random(5);
        $user           = new User();
        $user->name     = $request->username;
        $user->email    = $request->email;
        $user->password = Hash::make($request->password);
        $user->status   = 0;
        $user->confirm_code = $confirm_code;
        $user->save();

        Mail::send('very',['confirm_code' => $confirm_code], 
        function($message) use($request){
            $message->to($request->email,$request->username)->subject('Mail xác nhận đăng kí thành công');
        });

        return redirect('login')->with('status','vui long xac nhan mail');
    }

    public function login(Request $request){
        $user = [
            'email'     => $request->email,
            'password'  => $request->password,
            'status'    => 1,
        ];
        if(!Auth::attempt($user)){
            // $user = Auth::User(); 
            return redirect('login')->with('status','email hoac mat khau khong dung');
        }
        else{
            return redirect('welcome');
        }
    }

    public function veryAccount($code){
        $user = User::where('confirm_code',$code);

        if($user->count()>0){
            $user->update([
                'status'=> 1,
                'confirm_code' => 'oke'
            ]);
            $status = 'Ban da xac nhan thanh cong';
        }
        else{
            $status = 'Xac nhan that bai vui long xac nhan lai';
        }

        return redirect('login')->with('status',$status);

    }

}
