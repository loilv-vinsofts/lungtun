<?php

namespace App\Http\Controllers;

use App\Http\Requests\Createtbl_MemberRequest;
use App\Http\Requests\Updatetbl_MemberRequest;
use App\Repositories\tbl_MemberRepository;
use App\Http\Controllers\AppBaseController;
use Illuminate\Http\Request;
use Flash;
use Prettus\Repository\Criteria\RequestCriteria;
use Response;

class tbl_MemberController extends AppBaseController
{
    /** @var  tbl_MemberRepository */
    private $tblMemberRepository;

    public function __construct(tbl_MemberRepository $tblMemberRepo)
    {
        $this->tblMemberRepository = $tblMemberRepo;
    }

    /**
     * Display a listing of the tbl_Member.
     *
     * @param Request $request
     * @return Response
     */
    public function index(Request $request)
    {
        $this->tblMemberRepository->pushCriteria(new RequestCriteria($request));
        $tblMembers = $this->tblMemberRepository->all();

        return view('tbl__members.index')
            ->with('tblMembers', $tblMembers);
    }

    /**
     * Show the form for creating a new tbl_Member.
     *
     * @return Response
     */
    public function create()
    {
        return view('tbl__members.create');
    }

    /**
     * Store a newly created tbl_Member in storage.
     *
     * @param Createtbl_MemberRequest $request
     *
     * @return Response
     */
    public function store(Createtbl_MemberRequest $request)
    {
        $input = $request->all();

        $tblMember = $this->tblMemberRepository->create($input);

        Flash::success('Tbl  Member saved successfully.');

        return redirect(route('tblMembers.index'));
    }

    /**
     * Display the specified tbl_Member.
     *
     * @param  int $id
     *
     * @return Response
     */
    public function show($id)
    {
        $tblMember = $this->tblMemberRepository->findWithoutFail($id);

        if (empty($tblMember)) {
            Flash::error('Tbl  Member not found');

            return redirect(route('tblMembers.index'));
        }

        return view('tbl__members.show')->with('tblMember', $tblMember);
    }

    /**
     * Show the form for editing the specified tbl_Member.
     *
     * @param  int $id
     *
     * @return Response
     */
    public function edit($id)
    {
        $tblMember = $this->tblMemberRepository->findWithoutFail($id);

        if (empty($tblMember)) {
            Flash::error('Tbl  Member not found');

            return redirect(route('tblMembers.index'));
        }

        return view('tbl__members.edit')->with('tblMember', $tblMember);
    }

    /**
     * Update the specified tbl_Member in storage.
     *
     * @param  int              $id
     * @param Updatetbl_MemberRequest $request
     *
     * @return Response
     */
    public function update($id, Updatetbl_MemberRequest $request)
    {
        $tblMember = $this->tblMemberRepository->findWithoutFail($id);

        if (empty($tblMember)) {
            Flash::error('Tbl  Member not found');

            return redirect(route('tblMembers.index'));
        }

        $tblMember = $this->tblMemberRepository->update($request->all(), $id);

        Flash::success('Tbl  Member updated successfully.');

        return redirect(route('tblMembers.index'));
    }

    /**
     * Remove the specified tbl_Member from storage.
     *
     * @param  int $id
     *
     * @return Response
     */
    public function destroy($id)
    {
        $tblMember = $this->tblMemberRepository->findWithoutFail($id);

        if (empty($tblMember)) {
            Flash::error('Tbl  Member not found');

            return redirect(route('tblMembers.index'));
        }

        $this->tblMemberRepository->delete($id);

        Flash::success('Tbl  Member deleted successfully.');

        return redirect(route('tblMembers.index'));
    }
}
