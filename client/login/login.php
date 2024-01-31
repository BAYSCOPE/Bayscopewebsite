<?php
session_start();
require '../../lib/Customers.php';


if($_SERVER['REQUEST_METHOD'] == 'POST'){
    $_SESSION['email'] = $_POST['email'];
    $customer = new Customers\Customer($_SESSION['email']);
 $login = $customer->getData();

if($login['status']  && $login['data']['password'] == $_POST['password']){
       
    header('Location:../dashboard/');
    exit();
}
else{
    $_SESSION['msg'] = " invalid Credentials";
    unset($_SESSION["email"]);
    header('Location:../login/');
}
}
?>