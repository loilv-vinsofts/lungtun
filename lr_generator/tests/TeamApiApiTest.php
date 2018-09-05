<?php

use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class TeamApiApiTest extends TestCase
{
    use MakeTeamApiTrait, ApiTestTrait, WithoutMiddleware, DatabaseTransactions;

    /**
     * @test
     */
    public function testCreateTeamApi()
    {
        $teamApi = $this->fakeTeamApiData();
        $this->json('POST', '/api/v1/teamApis', $teamApi);

        $this->assertApiResponse($teamApi);
    }

    /**
     * @test
     */
    public function testReadTeamApi()
    {
        $teamApi = $this->makeTeamApi();
        $this->json('GET', '/api/v1/teamApis/'.$teamApi->id);

        $this->assertApiResponse($teamApi->toArray());
    }

    /**
     * @test
     */
    public function testUpdateTeamApi()
    {
        $teamApi = $this->makeTeamApi();
        $editedTeamApi = $this->fakeTeamApiData();

        $this->json('PUT', '/api/v1/teamApis/'.$teamApi->id, $editedTeamApi);

        $this->assertApiResponse($editedTeamApi);
    }

    /**
     * @test
     */
    public function testDeleteTeamApi()
    {
        $teamApi = $this->makeTeamApi();
        $this->json('DELETE', '/api/v1/teamApis/'.$teamApi->id);

        $this->assertApiSuccess();
        $this->json('GET', '/api/v1/teamApis/'.$teamApi->id);

        $this->assertResponseStatus(404);
    }
}
