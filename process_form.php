<html>
<body>

Welcome <?php echo $_POST["firstname"] . " " . $_POST["lastname"]; ?><br>
Your birthday is: <?php echo $_POST["birthday"]; ?><br>
Your zipcode is: <?php echo $_POST["zipcode"]; ?><br>

<?php
var_dump($_POST);
?>
</body>
</html>