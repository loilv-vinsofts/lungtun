<?php

namespace App\Repositories;

use App\Models\tbl_Member;
use InfyOm\Generator\Common\BaseRepository;

/**
 * Class tbl_MemberRepository
 * @package App\Repositories
 * @version August 27, 2018, 2:26 am UTC
 *
 * @method tbl_Member findWithoutFail($id, $columns = ['*'])
 * @method tbl_Member find($id, $columns = ['*'])
 * @method tbl_Member first($columns = ['*'])
*/
class tbl_MemberRepository extends BaseRepository
{
    /**
     * @var array
     */
    protected $fieldSearchable = [
        'name',
        'email',
        'password'
    ];

    /**
     * Configure the Model
     **/
    public function model()
    {
        return tbl_Member::class;
    }
}
