<!doctype html>
<html lang="en">

<head>
  <title>Title</title>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

  <!-- Bootstrap CSS -->
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/css/bootstrap.min.css" integrity="sha384-Smlep5jCw/wG7hdkwQ/Z5nLIefveQRIY9nfy6xoR1uRYBtpZgI6339F5dgvm/e9B"
    crossorigin="anonymous">
</head>

<body>
  <div class="container">
    <div class="row">
      <div class="col-4">
        <form action="addUser" method="post">
          @csrf
          <h3>Create Account</h3>
          <Label>Username:</Label>
          <input type="text" name="username" class="form-control"> 
          @if ($errors->has('email'))
          <p class="text-danger">{{ $errors->first('username') }}</p>
          @endif
          <br />
          <Label>Email:</Label>
          <input type="email" name="email" class="form-control"> 
          @if ($errors->has('email'))
          <p class="text-danger">{{ $errors->first('email') }}</p>
          @endif
          <br />
          <Label>Password:</Label>
          <input type="password" name="password" class="form-control"> 
          @if ($errors->has('email'))
          <p class="text-danger">{{ $errors->first('password') }}</p>
          @endif
          <br />
          <input type="submit" name="Register" class="btn btn-primary">
        </form>
      </div>
    </div>
  </div>
  <!-- Optional JavaScript -->
  <!-- jQuery first, then Popper.js, then Bootstrap JS -->
  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
    crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
    crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/js/bootstrap.min.js" integrity="sha384-o+RDsa0aLu++PJvFqy8fFScvbHFLtbvScb8AjopnFD+iEQ7wo/CG0xlczd+2O/em"
    crossorigin="anonymous"></script>
</body>

</html>