<?php
  $hostname = "localhost";
  $username = "game";
  $password = "password";
  $dbname = "game";

  $conn = mysqli_connect($hostname, $username, $password, $dbname);
  if(!$conn){
    echo "Database connection error".mysqli_connect_error();
  }

   mysqli_set_charset($conn,"utf8");
?>