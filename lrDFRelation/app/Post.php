<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    //
    public function auth()
    {
        return $this->belongsto('App\auth');
    }
}
