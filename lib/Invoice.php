<?php
namespace Bayscope;

class Invoice 
{

    /**
     * @author sirabdull70@gmail.com
     * @author <NAME>
     * @var int
     * /
     */


     public $id;
     public $org_name;
     public $email;
     public $phone;
     public $address;
     public $city;
     public $state;
     public $country;
     public $ammount;
     public $items;
     public $status;


 public function __construct($email) {
    $this->email = $email;
    

}
public static function getDb() {
    $config = require __DIR__. '/../config/config.php';
    $db = $config['db'];
    return mysqli_connect($db['host'], $db['username'], $db['password'], $db['database']);

} 

 public function getinvoices($status = 'unpaid') {
    $db = static::getDb(); 
    
$sql = "SELECT * FROM invoice WHERE email =? AND `status` = ? ";
    $stmt = $db->prepare($sql);
    $stmt->bind_param('ss', $this->email, $status);
     $stmt->execute();
     $result = $stmt->get_result();
     $rows = $result->num_rows;
     $this->count = $rows;
     $data = $result->fetch_assoc();
     if($rows <= 0) {
     return [
         'data' => $data,
         'status' => false,
          'msg'   => 'You have no invoice yet'
       ];
    }
    
     $this->inoice_id = $data['id'];
     $this->email = $data['email'];
     $this->number = $data['invoice_number'];
    $this->date = $data['invoice_date'];
    $this->status =$data['status'];
     $this->ammount = $data['ammount'];
     $this->items = $this->getItems($this->id);
     


     }







public function create($data) {
    $db = static::getDb();
    $columns = array_keys($data);
    $values = array_values($data);
    $sql = 'INSERT INTO invoices ('. implode(',', $columns). ') VALUES ('. str_repeat('?,', count($values) - 1). '?);';
    $stmt = $db->prepare($sql);
    $stmt -> bind_param( str_repeat('s', count($values)),...$values);
    $stmt->execute();
  
}


public function getitems($invoice){

     $db = static::getDb();
    $sql = 'SELECT * FROM items WHERE invoice_number =?';
    $stmt = $db->prepare($sql);
    $stmt->bind_param('s', $invoice);
    $stmt->execute();
    $result->$stmt->get_result();
    $rows = $result->num_rows;
    $data = $result->fetch_assoc();
  while($data = $result->fetch_assoc() ){
    $this->items[] = $data;
  }

}




}
?>