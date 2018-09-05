<?php

use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class TeamsApiTest extends TestCase
{
    use MakeTeamsTrait, ApiTestTrait, WithoutMiddleware, DatabaseTransactions;

    /**
     * @test
     */
    public function testCreateTeams()
    {
        $teams = $this->fakeTeamsData();
        $this->json('POST', '/api/v1/teams', $teams);

        $this->assertApiResponse($teams);
    }

    /**
     * @test
     */
    public function testReadTeams()
    {
        $teams = $this->makeTeams();
        $this->json('GET', '/api/v1/teams/'.$teams->id);

        $this->assertApiResponse($teams->toArray());
    }

    /**
     * @test
     */
    public function testUpdateTeams()
    {
        $teams = $this->makeTeams();
        $editedTeams = $this->fakeTeamsData();

        $this->json('PUT', '/api/v1/teams/'.$teams->id, $editedTeams);

        $this->assertApiResponse($editedTeams);
    }

    /**
     * @test
     */
    public function testDeleteTeams()
    {
        $teams = $this->makeTeams();
        $this->json('DELETE', '/api/v1/teams/'.$teams->id);

        $this->assertApiSuccess();
        $this->json('GET', '/api/v1/teams/'.$teams->id);

        $this->assertResponseStatus(404);
    }
}
