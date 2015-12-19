<!DOCTYPE html>
<html lang="en">
<head>
    <title>Create a record | PHP app</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
</head>
<body>

<nav class="navbar navbar-inverse navbar-fixed-top">
    <div class="container-fluid">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="/">PHP Application</a>
        </div>
        <div class="collapse navbar-collapse" id="myNavbar">
            <ul class="nav navbar-nav">
                <li><a href="/">Home</a></li>
                <li><a href="/records">All Records</a></li>
                <li><a href="/records/create">Create a New Record</a></li>
            </ul>
        </div>
    </div>
</nav>

<div class="container" id="my_container">
    <div class="jumbotron">
        <h1>    Create a new record
        </h1>
    </div>
    <form method="POST" action="process_form.php">
        <div class="form-group">
            <label for="firstname">First Name</label>
            <input class="form-control" id="firstname" name="firstname" type="text">
        </div>

        <div class="form-group">
            <label for="lastname">Last Name</label>
            <input class="form-control" id="lastname" name="lastname" type="text">
        </div>

        <div class="form-group">
            <label for="birthday">Date of Birth</label>
            <input class="form-control" id="birthday" name="birthday" type="text">
        </div>

        <div class="form-group">
            <label for="zipcode">Zip Code</label>
            <input class="form-control" id="zipcode" name="zipcode" type="text">
        </div>

        <button type="submit" class="btn btn-info form-control" id="btn">Create New Record</button>
    </form>
</div>

<footer class="container-fluid">
    <div class="col-xs-12">
        <h3>Web app created by:</h3>
        <p>Bryan Miller<br>
            <a href="mailto:bryanjamesmiller@g.harvard.edu" target="_top">bryanjamesmiller@g.harvard.edu</a><br>
            901-605-7007</p>
    </div>
</footer>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
</body>
</html>