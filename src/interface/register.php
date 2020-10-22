<?php

header('content-type:text/html;charset=utf-8;');

$uname = $_POST['username'];//获取前端传递的用户名
$upass = $_POST['password'];//获取前端传递的密码
$conn = mysqli_connect('localhost','root','root','vip_user');
$sql = "INSERT INTO `info` VALUES (null,'$uname','$upass')";
$res = mysqli_query($conn,$sql);
mysqli_close($conn);

if($res){
    $arr = array('code'=>1);//注册成功
    $json = json_encode($arr);
    echo($json);
}else{
    $arr = array('code'=>0);//注册成功
    $json = json_encode($arr);
    echo($json);
}

?>