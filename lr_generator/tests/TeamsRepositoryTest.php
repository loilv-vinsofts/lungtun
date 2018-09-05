<?php

use App\Models\Teams;
use App\Repositories\TeamsRepository;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class TeamsRepositoryTest extends TestCase
{
    use MakeTeamsTrait, ApiTestTrait, DatabaseTransactions;

    /**
     * @var TeamsRepository
     */
    protected $teamsRepo;

    public function setUp()
    {
        parent::setUp();
        $this->teamsRepo = App::make(TeamsRepository::class);
    }

    /**
     * @test create
     */
    public function testCreateTeams()
    {
        $teams = $this->fakeTeamsData();
        $createdTeams = $this->teamsRepo->create($teams);
        $createdTeams = $createdTeams->toArray();
        $this->assertArrayHasKey('id', $createdTeams);
        $this->assertNotNull($createdTeams['id'], 'Created Teams must have id specified');
        $this->assertNotNull(Teams::find($createdTeams['id']), 'Teams with given id must be in DB');
        $this->assertModelData($teams, $createdTeams);
    }

    /**
     * @test read
     */
    public function testReadTeams()
    {
        $teams = $this->makeTeams();
        $dbTeams = $this->teamsRepo->find($teams->id);
        $dbTeams = $dbTeams->toArray();
        $this->assertModelData($teams->toArray(), $dbTeams);
    }

    /**
     * @test update
     */
    public function testUpdateTeams()
    {
        $teams = $this->makeTeams();
        $fakeTeams = $this->fakeTeamsData();
        $updatedTeams = $this->teamsRepo->update($fakeTeams, $teams->id);
        $this->assertModelData($fakeTeams, $updatedTeams->toArray());
        $dbTeams = $this->teamsRepo->find($teams->id);
        $this->assertModelData($fakeTeams, $dbTeams->toArray());
    }

    /**
     * @test delete
     */
    public function testDeleteTeams()
    {
        $teams = $this->makeTeams();
        $resp = $this->teamsRepo->delete($teams->id);
        $this->assertTrue($resp);
        $this->assertNull(Teams::find($teams->id), 'Teams should not exist in DB');
    }
}
