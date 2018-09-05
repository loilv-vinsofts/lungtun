<?php

use App\Models\TeamApi;
use App\Repositories\TeamApiRepository;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class TeamApiRepositoryTest extends TestCase
{
    use MakeTeamApiTrait, ApiTestTrait, DatabaseTransactions;

    /**
     * @var TeamApiRepository
     */
    protected $teamApiRepo;

    public function setUp()
    {
        parent::setUp();
        $this->teamApiRepo = App::make(TeamApiRepository::class);
    }

    /**
     * @test create
     */
    public function testCreateTeamApi()
    {
        $teamApi = $this->fakeTeamApiData();
        $createdTeamApi = $this->teamApiRepo->create($teamApi);
        $createdTeamApi = $createdTeamApi->toArray();
        $this->assertArrayHasKey('id', $createdTeamApi);
        $this->assertNotNull($createdTeamApi['id'], 'Created TeamApi must have id specified');
        $this->assertNotNull(TeamApi::find($createdTeamApi['id']), 'TeamApi with given id must be in DB');
        $this->assertModelData($teamApi, $createdTeamApi);
    }

    /**
     * @test read
     */
    public function testReadTeamApi()
    {
        $teamApi = $this->makeTeamApi();
        $dbTeamApi = $this->teamApiRepo->find($teamApi->id);
        $dbTeamApi = $dbTeamApi->toArray();
        $this->assertModelData($teamApi->toArray(), $dbTeamApi);
    }

    /**
     * @test update
     */
    public function testUpdateTeamApi()
    {
        $teamApi = $this->makeTeamApi();
        $fakeTeamApi = $this->fakeTeamApiData();
        $updatedTeamApi = $this->teamApiRepo->update($fakeTeamApi, $teamApi->id);
        $this->assertModelData($fakeTeamApi, $updatedTeamApi->toArray());
        $dbTeamApi = $this->teamApiRepo->find($teamApi->id);
        $this->assertModelData($fakeTeamApi, $dbTeamApi->toArray());
    }

    /**
     * @test delete
     */
    public function testDeleteTeamApi()
    {
        $teamApi = $this->makeTeamApi();
        $resp = $this->teamApiRepo->delete($teamApi->id);
        $this->assertTrue($resp);
        $this->assertNull(TeamApi::find($teamApi->id), 'TeamApi should not exist in DB');
    }
}
