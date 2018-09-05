<table class="table table-responsive" id="tblMembers-table">
    <thead>
        <tr>
            <th>Name</th>
        <th>Email</th>
        <th>Password</th>
            <th colspan="3">Action</th>
        </tr>
    </thead>
    <tbody>
    @foreach($tblMembers as $tblMember)
        <tr>
            <td>{!! $tblMember->name !!}</td>
            <td>{!! $tblMember->email !!}</td>
            <td>{!! $tblMember->password !!}</td>
            <td>
                {!! Form::open(['route' => ['tblMembers.destroy', $tblMember->id], 'method' => 'delete']) !!}
                <div class='btn-group'>
                    <a href="{!! route('tblMembers.show', [$tblMember->id]) !!}" class='btn btn-default btn-xs'><i class="glyphicon glyphicon-eye-open"></i></a>
                    <a href="{!! route('tblMembers.edit', [$tblMember->id]) !!}" class='btn btn-default btn-xs'><i class="glyphicon glyphicon-edit"></i></a>
                    {!! Form::button('<i class="glyphicon glyphicon-trash"></i>', ['type' => 'submit', 'class' => 'btn btn-danger btn-xs', 'onclick' => "return confirm('Are you sure?')"]) !!}
                </div>
                {!! Form::close() !!}
            </td>
        </tr>
    @endforeach
    </tbody>
</table>