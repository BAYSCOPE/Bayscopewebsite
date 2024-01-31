<?php
 session_start();
require '../../lib/Customers.php';


if($_SERVER['REQUEST_METHOD'] == 'POST'){
    $_SESSION['email'] = $_POST['email'];
    $customer = new Customers\Customer($_SESSION['email']);
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