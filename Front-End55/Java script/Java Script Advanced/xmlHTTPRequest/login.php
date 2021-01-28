<?php
$login = trim($_GET['login']);
$pass = trim($_GET['pass']);

if($login =='' || $pass == ''){
	echo "Ошибка. Зполните поле";
	return;
	}
	
	if($login !='login' || $pass != '123'){
		echo "Такого пользователя нет";
		return;
		}else{
			echo "Добро пожаловать";
			}
?>