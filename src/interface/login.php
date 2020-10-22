<?php

header('content-type:text/html;charset=utf-8;');

$uname = $_GET['username'];//获取前端传递的用户名
$upass = $_GET['password'];//获取前端传递的密码

$conn = mysqli_connect('localhost','root','root','vip_user');
$sql = "SELECT * FROM `info` WHERE `username`='$uname' AND `password`='$upass'";
$res = mysqli_query($conn,$sql);
$row = mysqli_fetch_assoc($res);
mysqli_close($conn);
if($row){    
    // header('location:../pages/cart.html');
    $arr = array('code'=>1);//登录成功
    $json = json_encode($arr);
    echo($json);
}else{
    // echo "用户名或密码错误!";
    $arr = array('code'=>0);//登录成功
    $json = json_encode($arr);
    echo($json);
}


?>