<?php 
  session_start();
  if(isset($_SESSION['username'])){
    header("location: users.php");
  }
?>

<?php include_once "header.php"; ?>
<body>
  <div class="wrapper">
    <section class="form signup">
      <header>Your Information</header>
      <form action="#" method="POST" enctype="multipart/form-data" autocomplete="off">
        <div class="error-text"></div>
        <div class="name-details">
          <div class="field input">
            <label>Full Name</label>
            <input type="text" name="fname" placeholder="Full name" required>
          </div>
          <div class="field input">
            <label>Username</label>
            <input type="text" name="username" placeholder="username" required>
          </div>
        </div>
      
        <div class="field input">
          <label>Password</label>
          <input type="password" name="password" placeholder="Enter new password" required>
          <i class="fas fa-eye"></i>
        </div>
       
        <div class="field button">
          <input type="submit" name="submit" value="Continue ">
        </div>
      </form>
      <div class="link">Already signed up? <a href="login.php">Login now</a></div>
    </section>
  </div>

  <script src="javascript/pass-show-hide.js"></script>
  <script src="javascript/signup.js"></script>

</body>
</html>