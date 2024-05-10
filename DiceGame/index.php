<?php 
  session_start();
  include_once "membership/php/config.php";
  if(!isset($_SESSION['unique_id'])){
    header("location: membership/login.php");
  }
?>

<?php 
    $sql = mysqli_query($conn, "SELECT * FROM users WHERE unique_id = {$_SESSION['unique_id']}");
    if(mysqli_num_rows($sql) > 0){
      $row = mysqli_fetch_assoc($sql);
    }
  ?>

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dice Game</title>
    <link rel="stylesheet" href="css/style.css">
 
    <link rel="stylesheet" href="fonts/fontawesome-all.min.css">
    <link rel="stylesheet"   href="https://fonts.googleapis.com/css?family=Oswald">
    <link rel="stylesheet" href="fonts/typicons.min.css">
</head>
<body><parent>
  <header>
 

      <nav>
  <ul>
    <li class="scoreboard"> <img class="logo" src="membership/php/images/<?php echo $row['img']; ?>" alt=""><center> <?php echo $row['status']; ?></center></li>
    <li class="infoboard" ><txt>Wellcome</txt><?php echo $row['user_name']?><center><txt>Your Score is:</txt><?php echo $row['score']; ?><br>
    
    <a href="#"><a href="membership/php/logout.php?logout_id=<?php echo $row['unique_id']; ?>" class="logout">Logout</a></a></li></center>
  </ul>
</nav>
   
<div class="content">
  
 
  <div class="details">

  </div>
</div>

</header>

    <script>
     /*   alert("Please choose a number between 6 to 9"); */
    /*  
     popup.style.display = "none";   
   popup.style.display = "none"; */
    </script>
      <div class='popup'   > 
  <center>  <div class="images" id="Result"><img  src="img/RollingDice.png" width="40px"><br></div>
  <div id="Result0"></div>
   <div id="Result1"></div>
            <div id="Result2"></div> 
            <div class="alert" id="Result3"></div>
            <div class="btn" id="Result4"><a href='index.php'>Try again</a></div></center></div>
    <div class="main"> 
   <center> <div >
        <button  onclick="six()" class="sel" id="six">6</button>
        <button  onclick="seven()" class="sel" id="seven">7</button>
        <button  onclick="eight()" class="sel" id="eight">8</button>
        <button  onclick="nine()" class="sel" id="nine">9</button>
    </div></center>
    <center>
    <div class="box" id="select"><i class="fas fa-dice"></i> Select your choice!</div>

    <div  class="container">
      
     
    <div class="dice-wrapper">
       <img src="img/one.png" id="die-1">&nbsp;&nbsp;&nbsp;
       <img src="img/two.png" id="die-2">
       
    </div>
    <div class="board">
    <button  class="btn" onclick="roll()"><i class="fas fa-dice"></i> ROLL THE DICE</button>
    </div>
</div>
<div class="Result" id="total"><i class="fas fa-dice"></i> Your Roll</div>


<center><div id="DiceTotal" class="Result"><i class="fas fa-dice"></i> Total Score</div><br></center>
</div>

  </parent> 
<script src="script.js"></script>
</body>
</html>