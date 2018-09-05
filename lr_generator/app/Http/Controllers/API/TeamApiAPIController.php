<?php

namespace App\Http\Controllers\API;

use App\Http\Requests\API\CreateTeamApiAPIRequest;
use App\Http\Requests\API\UpdateTeamApiAPIRequest;
use App\Models\TeamApi;
use App\Repositories\TeamApiRepository;
use Illuminate\Http\Request;
use App\Http\Controllers\AppBaseController;
use InfyOm\Generator\Criteria\LimitOffsetCriteria;
use Prettus\Repository\Criteria\RequestCriteria;
use Response;

/**
 * Class TeamApiController
 * @package App\Http\Controllers\API
 */

class TeamApiAPIController extends AppBaseController
{
    /** @var  TeamApiRepository */
    private $teamApiRepository;

    public function __construct(TeamApiRepository $teamApiRepo)
    {
        $this->teamApiRepository = $teamApiRepo;
    }

    /**
     * Display a listing of the TeamApi.
     * GET|HEAD /teamApis
     *
     * @param Request $request
     * @return Response
     */
    public function index(Request $request)
    {
        $this->teamApiRepository->pushCriteria(new RequestCriteria($request));
        $this->teamApiRepository->pushCriteria(new LimitOffsetCriteria($request));
        $teamApis = $this->teamApiRepository->all();

        return $this->sendResponse($teamApis->toArray(), 'Team Apis retrieved successfully');
    }

    /**
     * Store a newly created TeamApi in storage.
     * POST /teamApis
     *
     * @param CreateTeamApiAPIRequest $request
     *
     * @return Response
     */
    public function store(CreateTeamApiAPIRequest $request)
    {
        $input = $request->all();

        $teamApis = $this->teamApiRepository->create($input);

        return $this->sendResponse($teamApis->toArray(), 'Team Api saved successfully');
    }

    /**
     * Display the specified TeamApi.
     * GET|HEAD /teamApis/{id}
     *
     * @param  int $id
     *
     * @return Response
     */
    public function show($id)
    {
        /** @var TeamApi $teamApi */
        $teamApi = $this->teamApiRepository->findWithoutFail($id);

        if (empty($teamApi)) {
            return $this->sendError('Team Api not found');
        }

        return $this->sendResponse($teamApi->toArray(), 'Team Api retrieved successfully');
    }

    /**
     * Update the specified TeamApi in storage.
     * PUT/PATCH /teamApis/{id}
     *
     * @param  int $id
     * @param UpdateTeamApiAPIRequest $request
     *
     * @return Response
     */
    public function update($id, UpdateTeamApiAPIRequest $request)
    {
        $input = $request->all();

        /** @var TeamApi $teamApi */
        $teamApi = $this->teamApiRepository->findWithoutFail($id);

        if (empty($teamApi)) {
            return $this->sendError('Team Api not found');
        }

        $teamApi = $this->teamApiRepository->update($input, $id);

        return $this->sendResponse($teamApi->toArray(), 'TeamApi updated successfully');
    }

    /**
     * Remove the specified TeamApi from storage.
     * DELETE /teamApis/{id}
     *
     * @param  int $id
     *
     * @return Response
     */
    public function destroy($id)
    {
        /** @var TeamApi $teamApi */
        $teamApi = $this->teamApiRepository->findWithoutFail($id);

        if (empty($teamApi)) {
            return $this->sendError('Team Api not found');
        }

        $teamApi->delete();

        return $this->sendResponse($id, 'Team Api deleted successfully');
    }
}
