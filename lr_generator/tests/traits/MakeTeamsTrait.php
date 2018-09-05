<?php

use Faker\Factory as Faker;
use App\Models\Teams;
use App\Repositories\TeamsRepository;

trait MakeTeamsTrait
{
    /**
     * Create fake instance of Teams and save it in database
     *
     * @param array $teamsFields
     * @return Teams
     */
    public function makeTeams($teamsFields = [])
    {
        /** @var TeamsRepository $teamsRepo */
        $teamsRepo = App::make(TeamsRepository::class);
        $theme = $this->fakeTeamsData($teamsFields);
        return $teamsRepo->create($theme);
    }

    /**
     * Get fake instance of Teams
     *
     * @param array $teamsFields
     * @return Teams
     */
    public function fakeTeams($teamsFields = [])
    {
        return new Teams($this->fakeTeamsData($teamsFields));
    }

    /**
     * Get fake data of Teams
     *
     * @param array $postFields
     * @return array
     */
    public function fakeTeamsData($teamsFields = [])
    {
        $fake = Faker::create();

        return array_merge([
            'name' => $fake->word,
            'description' => $fake->word,
            'created_at' => $fake->word,
            'updated_at' => $fake->word
        ], $teamsFields);
    }
}
