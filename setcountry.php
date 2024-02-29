<?php
if($_SERVER['REQUEST_METHOD'] == 'POST') {
 $_POST['country'] ;
$data = [
    'status' => true, 
    'country' => $_SESSION['country']
];
return json_encode($data);
}
else { 
    $data = [
    'status' => true,
    'country' => 'not set' 
    ];
return json_encode($data);
}

?>  