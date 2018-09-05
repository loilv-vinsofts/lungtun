<?php

namespace App\Models;

use Eloquent as Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * Class TeamApi
 * @package App\Models
 * @version August 27, 2018, 4:00 am UTC
 *
 * @property string name
 * @property string description
 */
class TeamApi extends Model
{
    use SoftDeletes;

    public $table = 'team_apis';
    

    protected $dates = ['deleted_at'];


    public $fillable = [
        'name',
        'description'
    ];

    /**
     * The attributes that should be casted to native types.
     *
     * @var array
     */
    protected $casts = [
        'name' => 'string',
        'description' => 'string'
    ];

    /**
     * Validation rules
     *
     * @var array
     */
    public static $rules = [
        
    ];

    
}
