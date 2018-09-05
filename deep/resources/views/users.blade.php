@extends('master')
@section('content')
<div class="container">
    <br />
    <h1>Table User</h1>
    <table class="table table-bordered table_user">
        <thead>
            <tr>
                <th width="30%">Firstname</th>
                <th width="30%">Lastname</th>
                <th width="25%">Username</th>
                <th width="5%">Age</th>
                <th width="5%">Gender</th>
                <th width="5%" colspan="2">Action</th>  
            </tr>
        </thead>
        <tbody>
            @foreach($user as $item)
            <tr>
                <td>{{$item->first_name}}</td>
                <td>{{$item->last_name}}</td>
                <td>{{$item->username}}</td>
                <td>{{$item->age}}</td>
                <td>{{$item->gender}}</td>
                <td>
                    {!! Form::open(['url' => 'user/' . $item->id]) !!}
                        {{ Form::hidden('_method', 'DELETE') }}
                        {{ Form::submit('Delete', array('class' => 'btn btn-warning')) }}
                    {!! Form::close() !!}   
                </td>
                <td>
                    {!! Form::open(['url' => 'user/' . $item->id]) !!}
                        {{ Form::hidden('_method', 'PUT') }}
                        {{ Form::submit('Update', array('class' => 'btn btn-primary')) }}
                    {!! Form::close() !!}   
                </td>
            </tr>
            @endforeach
        </tbody>
    </table>
    <div class="text-center">
        {!! $user->links('pagi') !!}
    </div>
    
</div>
@endsection