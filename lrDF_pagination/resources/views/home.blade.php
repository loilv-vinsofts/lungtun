@extends('master')

@section('content')
<div class="container">
    <table class="table">
        <thead>
            <tr>
                <th>id</th>
                <th>title</th>
                <th>body</th>
            </tr>
        </thead>
        <tbody>
        @foreach($rs as $item)
            <tr>
                <td scope="row">{{$item->id}}</td>
                <td>{{$item->title}}</td>
                <td>{{$item->body}}</td>
            </tr>
        @endforeach
        </tbody>
    </table>
    <div class="text-center">
        {!! $rs->links('name') !!}
    </div>
    
</div>

@endsection 