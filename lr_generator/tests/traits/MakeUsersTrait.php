<?php

use Faker\Factory as Faker;
use App\Models\Users;
use App\Repositories\UsersRepository;

trait MakeUsersTrait
{
    /**
     * Create fake instance of Users and save it in database
     *
     * @param array $usersFields
     * @return Users
     */
    public function makeUsers($usersFields = [])
    {
        /** @var UsersRepository $usersRepo */
        $usersRepo = App::make(UsersRepository::class);
        $theme = $this->fakeUsersData($usersFields);
        return $usersRepo->create($theme);
    }

    /**
     * Get fake instance of Users
     *
     * @param array $usersFields
     * @return Users
     */
    public function fakeUsers($usersFields = [])
    {
        return new Users($this->fakeUsersData($usersFields));
    }

    /**
     * Get fake data of Users
     *
     * @param array $postFields
     * @return array
     */
    public function fakeUsersData($usersFields = [])
    {
        $fake = Faker::create();

        return array_merge([
            'name' => $fake->word,
            'age' => $fake->word,
            'avatar' => $fake->word,
            'gender' => $fake->word,
            'created_at' => $fake->word,
            'updated_at' => $fake->word
        ], $usersFields);
    }
}
