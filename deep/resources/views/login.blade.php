@extends('master') 
@section('content')
<header>
    <div class="container">
        <div class="row">
            <div class="col-2">
                <img src="" alt="Logo">
            </div>
            <div class="col-10">
                <form action="user" method="get">
                {{ csrf_field() }}
                    <div class="row form-login">
                        <div class="col-5">
                            <input type="text" placeholder="Username" name="username" class="form-control">
                        </div>
                        <div class="col-5">
                            <input type="text" placeholder="Password" name="password" class="form-control">
                        </div>
                        <div class="col-2">
                            <input type="submit" value="Login" class="btn btn-primary">
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</header>
<div class="container">
    <section id="form-reg">
        <div class="row">
            <div class="col-7">
            </div>
            <div class="col-5">
                <form action="user" method="post">
                {{ csrf_field() }}
                    <h1>Create Account</h1>
                    <hr>
                    <div class="row ">
                        <div class="col-6">
                            <input type="text" name="firstname" id="" placeholder="Frist Name" class="form-control" required>
                        </div>
                        <div class="col-6">
                            <input type="text" name="lastname" id="" placeholder="Last Name" class="form-control" required>
                        </div>
                    </div>
                    <br />
                    <div class="row">
                        <div class="col-12">
                            <input type="text" name="username" id="" class="form-control" placeholder="username" required>
                        </div>
                        <div class="col-12">
                            <br />
                            <input type="password" name="password" id="" class="form-control" placeholder="password" required>
                        </div>

                        <div class="col-12">
                            <br />
                            <input type="number" name="age" id="" class="form-control" placeholder="Age" required>
                        </div>

                        <div class="col-12">
                            <br />
                            <select class="form-control" name="gender">
                                <option value="">---Gender---</option>
                                <option value="0">Male</option> 
                                <option value="1">FeMale</option>
                            </select>
                        </div>
                    </div>
                    <br />
                    <div class="row">
                        <div class="col-2">
                            <input type="submit" name="signup" id="" value="Sign Up" class="btn btn-primary">
                        </div>
                    </div>

                </form>
            </div>
        </div>
    </section>
</div>
@endsection