<?php
  $hostname = "localhost";
  $username = "rayan_game";
  $password = "13abak#Kal0010";
  $dbname = "rayan_game";

  $conn = mysqli_connect($hostname, $username, $password, $dbname);
  if(!$conn){
    echo "Database connection error".mysqli_connect_error();
  }

   mysqli_set_charset($conn,"utf8");
?>