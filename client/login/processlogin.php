<?php
session_start();
require '../../lib/Customers.php';
use Bayscope\Customer as Customer;

if($_SERVER['REQUEST_METHOD'] == 'POST'){
    $_SESSION['email'] = $_POST['email'];
    $customer = new Customer($_SESSION['email']);

 $login = $customer->getData();

if($login['status']  && $login['data']['password'] == $_POST['password']){
       if(isset($_POST['remember'])){
        setcookie("email", $_POST['email'], time() + 3600 * 24 * 30);
    }
    else{
        setcookie("email", $_POST['email'], time() - 3600);
    }
  

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