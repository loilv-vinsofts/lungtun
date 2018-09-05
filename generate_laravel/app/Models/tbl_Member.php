<?php

namespace App\Models;

use Eloquent as Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * Class tbl_Member
 * @package App\Models
 * @version August 27, 2018, 2:26 am UTC
 *
 * @property string name
 * @property string email
 * @property string password
 */
class tbl_Member extends Model
{
    use SoftDeletes;

    public $table = 'tbl__members';
    

    protected $dates = ['deleted_at'];


    public $fillable = [
        'name',
        'email',
        'password'
    ];

    /**
     * The attributes that should be casted to native types.
     *
     * @var array
     */
    protected $casts = [
        'name' => 'string',
        'email' => 'string',
        'password' => 'string'
    ];

    /**
     * Validation rules
     *
     * @var array
     */
    public static $rules = [
        
    ];

    
}
