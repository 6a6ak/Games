<?php 
  session_start();
  if(isset($_SESSION['unique_id'])){
    header("location: /memebership/users.php");
  }
?>

<?php include_once "header.php"; ?>
<body>


  <script src="javascript/pass-show-hide.js"></script>
  <script src="javascript/signup.js"></script>

</body>
</html>