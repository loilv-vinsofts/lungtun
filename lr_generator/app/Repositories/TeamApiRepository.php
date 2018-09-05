<?php

namespace App\Repositories;

use App\Models\TeamApi;
use InfyOm\Generator\Common\BaseRepository;

/**
 * Class TeamApiRepository
 * @package App\Repositories
 * @version August 27, 2018, 4:00 am UTC
 *
 * @method TeamApi findWithoutFail($id, $columns = ['*'])
 * @method TeamApi find($id, $columns = ['*'])
 * @method TeamApi first($columns = ['*'])
*/
class TeamApiRepository extends BaseRepository
{
    /**
     * @var array
     */
    protected $fieldSearchable = [
        'name',
        'description'
    ];

    /**
     * Configure the Model
     **/
    public function model()
    {
        return TeamApi::class;
    }
}
