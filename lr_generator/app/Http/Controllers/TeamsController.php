<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateTeamsRequest;
use App\Http\Requests\UpdateTeamsRequest;
use App\Repositories\TeamsRepository;
use App\Http\Controllers\AppBaseController;
use Illuminate\Http\Request;
use Flash;
use Prettus\Repository\Criteria\RequestCriteria;
use Response;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;

class TeamsController extends AppBaseController
{
    /** @var  TeamsRepository */
    private $teamsRepository;

    public function __construct(TeamsRepository $teamsRepo)
    {
        $this->teamsRepository = $teamsRepo;
    }

    /**
     * Display a listing of the Teams.
     *
     * @param Request $request
     * @return Response
     */
    public function index(Request $request)
    {
        $this->teamsRepository->pushCriteria(new RequestCriteria($request));
        $teams = $this->teamsRepository->all();

        return view('teams.index')
            ->with('teams', $teams);
    }

    /**
     * Show the form for creating a new Teams.
     *
     * @return Response
     */
    public function create()
    {
        return view('teams.create');
    }

    /**
     * Store a newly created Teams in storage.
     *
     * @param CreateTeamsRequest $request
     *
     * @return Response
     */
    public function store(CreateTeamsRequest $request)
    {
        $cover = $request->file('logo');
        dd($cover);
        $extension = $cover->getClientOriginalExtension();
        
        Storage::disk('public')->put($cover->getFilename().'.'.$extension,  File::get($cover));
        $input = $request->all();
        

        $teams = $this->teamsRepository->create($input);

        Flash::success('Teams saved successfully.');

        return redirect(route('teams.index'));
    }

    /**
     * Display the specified Teams.
     *
     * @param  int $id
     *
     * @return Response
     */
    public function show($id)
    {
        $teams = $this->teamsRepository->findWithoutFail($id);

        if (empty($teams)) {
            Flash::error('Teams not found');

            return redirect(route('teams.index'));
        }

        return view('teams.show')->with('teams', $teams);
    }

    /**
     * Show the form for editing the specified Teams.
     *
     * @param  int $id
     *
     * @return Response
     */
    public function edit($id)
    {
        $teams = $this->teamsRepository->findWithoutFail($id);

        if (empty($teams)) {
            Flash::error('Teams not found');

            return redirect(route('teams.index'));
        }

        return view('teams.edit')->with('teams', $teams);
    }

    /**
     * Update the specified Teams in storage.
     *
     * @param  int              $id
     * @param UpdateTeamsRequest $request
     *
     * @return Response
     */
    public function update($id, UpdateTeamsRequest $request)
    {
        $teams = $this->teamsRepository->findWithoutFail($id);

        if (empty($teams)) {
            Flash::error('Teams not found');

            return redirect(route('teams.index'));
        }

        $teams = $this->teamsRepository->update($request->all(), $id);

        Flash::success('Teams updated successfully.');

        return redirect(route('teams.index'));
    }

    /**
     * Remove the specified Teams from storage.
     *
     * @param  int $id
     *
     * @return Response
     */
    public function destroy($id)
    {
        $teams = $this->teamsRepository->findWithoutFail($id);

        if (empty($teams)) {
            Flash::error('Teams not found');

            return redirect(route('teams.index'));
        }

        $this->teamsRepository->delete($id);

        Flash::success('Teams deleted successfully.');

        return redirect(route('teams.index'));
    }
}
