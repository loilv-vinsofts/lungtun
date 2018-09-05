<?php

namespace App\Repositories;

use App\Models\Teams;
use InfyOm\Generator\Common\BaseRepository;

/**
 * Class TeamsRepository
 * @package App\Repositories
 * @version August 27, 2018, 3:58 am UTC
 *
 * @method Teams findWithoutFail($id, $columns = ['*'])
 * @method Teams find($id, $columns = ['*'])
 * @method Teams first($columns = ['*'])
*/
class TeamsRepository extends BaseRepository
{
    /**
     * @var array
     */
    protected $fieldSearchable = [
        'name',
        'description',
        'logo'
    ];

    /**
     * Configure the Model
     **/
    public function model()
    {
        return Teams::class;
    }
}
