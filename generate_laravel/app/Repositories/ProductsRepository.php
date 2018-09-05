<?php

namespace App\Repositories;

use App\Models\Products;
use InfyOm\Generator\Common\BaseRepository;

/**
 * Class ProductsRepository
 * @package App\Repositories
 * @version August 27, 2018, 2:42 am UTC
 *
 * @method Products findWithoutFail($id, $columns = ['*'])
 * @method Products find($id, $columns = ['*'])
 * @method Products first($columns = ['*'])
*/
class ProductsRepository extends BaseRepository
{
    /**
     * @var array
     */
    protected $fieldSearchable = [
        'product_name'
    ];

    /**
     * Configure the Model
     **/
    public function model()
    {
        return Products::class;
    }
}
