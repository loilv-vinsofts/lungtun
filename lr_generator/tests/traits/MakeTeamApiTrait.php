<?php

use Faker\Factory as Faker;
use App\Models\TeamApi;
use App\Repositories\TeamApiRepository;

trait MakeTeamApiTrait
{
    /**
     * Create fake instance of TeamApi and save it in database
     *
     * @param array $teamApiFields
     * @return TeamApi
     */
    public function makeTeamApi($teamApiFields = [])
    {
        /** @var TeamApiRepository $teamApiRepo */
        $teamApiRepo = App::make(TeamApiRepository::class);
        $theme = $this->fakeTeamApiData($teamApiFields);
        return $teamApiRepo->create($theme);
    }

    /**
     * Get fake instance of TeamApi
     *
     * @param array $teamApiFields
     * @return TeamApi
     */
    public function fakeTeamApi($teamApiFields = [])
    {
        return new TeamApi($this->fakeTeamApiData($teamApiFields));
    }

    /**
     * Get fake data of TeamApi
     *
     * @param array $postFields
     * @return array
     */
    public function fakeTeamApiData($teamApiFields = [])
    {
        $fake = Faker::create();

        return array_merge([
            'name' => $fake->word,
            'description' => $fake->word,
            'created_at' => $fake->word,
            'updated_at' => $fake->word
        ], $teamApiFields);
    }
}
