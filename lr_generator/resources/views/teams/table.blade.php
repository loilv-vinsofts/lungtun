<table class="table table-responsive" id="teams-table">
    <thead>
        <tr>
            <th>Name</th>
        <th>Descrition</th>
        <th>Logo</th>
            <th colspan="3">Action</th>
        </tr>
    </thead>
    <tbody>
    @foreach($teams as $teams)
        <tr>
            <td>{!! $teams->name !!}</td>
            <td>{!! $teams->description !!}</td>
            <td>{!! $teams->logo !!}</td>
            <td>
                {!! Form::open(['route' => ['teams.destroy', $teams->id], 'method' => 'delete']) !!}
                <div class='btn-group'>
                    <a href="{!! route('teams.show', [$teams->id]) !!}" class='btn btn-default btn-xs'><i class="glyphicon glyphicon-eye-open"></i></a>
                    <a href="{!! route('teams.edit', [$teams->id]) !!}" class='btn btn-default btn-xs'><i class="glyphicon glyphicon-edit"></i></a>
                    {!! Form::button('<i class="glyphicon glyphicon-trash"></i>', ['type' => 'submit', 'class' => 'btn btn-danger btn-xs', 'onclick' => "return confirm('Are you sure?')"]) !!}
                </div>
                {!! Form::close() !!}
            </td>
        </tr>
    @endforeach
    </tbody>
</table>