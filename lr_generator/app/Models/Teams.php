<?php

namespace App\Models;

use Eloquent as Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * Class Teams
 * @package App\Models
 * @version August 27, 2018, 3:58 am UTC
 *
 * @property string name
 * @property string description
 */
class Teams extends Model
{
    use SoftDeletes;

    public $table = 'teams';
    

    protected $dates = ['deleted_at'];


    public $fillable = [
        'name',
        'description',
        'logo'
    ];

    /**
     * The attributes that should be casted to native types.
     *
     * @var array
     */
    protected $casts = [
        'name' => 'string',
        'description' => 'string',
        'logo'=> 'string'
    ];

    /**
     * Validation rules
     *
     * @var array
     */
    public static $rules = [
        
    ];

    
}
