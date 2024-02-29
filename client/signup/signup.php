<?php
 session_start();
require '../../lib/Customers.php';
use Bayscope\Customer as Customer;

if($_SERVER['REQUEST_METHOD'] == 'POST'){
    $_SESSION['email'] = $_POST['email'];
    $customer = new Customer($_SESSION['email']);
$create = $customer->create($_POST);

if($create['status']){
    unset($_SESSION['email']);
    $_SESSION['msg'] = $create['msg'];
    header('Location:../login/');
}
else{
    unset($_SESSION['email']);
    $_SESSION['msg'] = $create['msg'];

    header('Location:../signup/');
}
}

?>