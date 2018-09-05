@extends('layouts.app')

@section('content')
    <section class="content-header">
        <h1>
            Tbl  Member
        </h1>
   </section>
   <div class="content">
       @include('adminlte-templates::common.errors')
       <div class="box box-primary">
           <div class="box-body">
               <div class="row">
                   {!! Form::model($tblMember, ['route' => ['tblMembers.update', $tblMember->id], 'method' => 'patch']) !!}

                        @include('tbl__members.fields')

                   {!! Form::close() !!}
               </div>
           </div>
       </div>
   </div>
@endsection