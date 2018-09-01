<?php 
	mysql_connect('localhost','root','123456');
	mysql_select_db('meizu');
	mysql_query('set names utf-8');
	$username = $_POST['username'];
	$password = $_POST['password'];
	$sql = "select*from login where username='$username' and password='$password'";
	$r=mysql_query($sql);
    $result = mysql_num_rows($r);
     echo $result;
 ?>