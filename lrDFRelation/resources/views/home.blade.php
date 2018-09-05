@extends('master')
@section('content')

<h3>hello</h3>

<hr>

{{$a2->name}}

@foreach($au as $item)

{{$item->body}}

@endforeach

@endsection