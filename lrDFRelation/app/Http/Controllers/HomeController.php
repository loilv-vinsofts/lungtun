<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Image;
use App\Post;
use App\auth;
class HomeController extends Controller
{
    public function index()
    {
        return view('home');
    }

    public function show()
    {

        $rs3 = new Post();
        $a2 = $rs3->find(2)->auth;

        $auth = new auth();
        $au = $auth->find(1)->posts;

        return view('home',['a2'=>$a2,'au'=>$au]);

    }
}
