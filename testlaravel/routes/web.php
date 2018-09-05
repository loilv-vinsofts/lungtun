<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
Route::get('abc', function () {
    return "kdfnsd";
});

Route::get('getid/{a}', function($abc){
    return 'ID cua ban la: '.$abc;
});
Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

// Route::get('/login', function(){
//     return view('demo');
// });

Route::get('/login', 'LoginController@getFrom');

Route::post('/dang-nhap', 'LoginController@handleFrom')->middleware('name');