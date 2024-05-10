<?php
    session_start();
    include_once "php/cfg.php";
   
    $fname = mysqli_real_escape_string($conn, $_POST['fname']);
    $username = mysqli_real_escape_string($conn, $_POST['username']);
    $password = mysqli_real_escape_string($conn, $_POST['password']);
    if(!empty($name) && !empty($username) && !empty($password)){
     
            $sql = mysqli_query($conn, "SELECT * FROM users WHERE usename = '{$username}'");
            if(mysqli_num_rows($sql) > 0){
                echo "$username - This username already exist!";
            }else{
               
                                $encrypt_pass = md5($password);
                                $insert_query = mysqli_query($conn, "INSERT INTO users (fname, username, password, status)
                                VALUES ( '{$fname}','{$username}','{$encrypt_pass}', '{$status}')");
                                if($insert_query){
                                    $select_sql2 = mysqli_query($conn, "SELECT * FROM users WHERE username = '{$username}'");
                                    if(mysqli_num_rows($select_sql2) > 0){
                                        $result = mysqli_fetch_assoc($select_sql2);
                                        $_SESSION['username'] = $result['username'];
                                        echo "success";
                                    }else{
                                        echo "This username address not Exist!";
                                    }
                                }else{
                                    echo "Something went wrong. Please try again!";
                                }
                          }}
?>