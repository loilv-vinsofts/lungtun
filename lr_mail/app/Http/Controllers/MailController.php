<?php

namespace App\Http\Controllers;

use App\User;
use App\Mail\SendMailUser;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Http\Controllers\Controller;

class MailController extends Controller
{
    /**
     * 
     *
     * @param    Request  $request
     * @param    int  $userId
     * @return  Response
     */
    public function send()
    {
 
 
        Mail::to('loilv@vinsofts.net')->send(new SendMailUser());
    }
}