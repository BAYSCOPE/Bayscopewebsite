<?php
/**
 * @authur sirabdull
 * edit configurations to suit your environment
 * 
 */

 return [
/**
 * 
 * App configurations
 * 
 */

    'app'=>[

        'name'=>' BayScopes IT',
        'url'=>'http://localhost/bayscopes',
        'debug'=>true,
        'log'=>true,
        'log_level'=>'debug',
        'timezone'=>'Africa/Lagos',
        'locale'=>'en_US',
        'default_locale'=>'en_US',
        'date_format'=>'Y-m-d',
        'time_format'=>'H:i:s',
       ' error_log_path'=>'../storage/logs/error.log',
        
  ],

/**
 * 
 * Database configurations
 * 
 * 
 */


     'db'=> [

        'driver' =>'mysqli',
        'host' => 'localhost',
        'database' => 'customers',
        'username' => 'root',
        'password' => '',
        'charset' => 'utf8',
        'collation' => 'utf8_unicode_ci',

     ],


     
        /**
         * mail configurations
         * we use gmail to send emails before  production
         * 
         * 
         */
   

       
    'mail'=>[
     
        'host'=>'smtp.gmail.com',
        'port'=>'587',
        'username'=>'bayscopes@gmail.com',
        'password'=>'<PASSWORD>',
        'encryption'=>'tls',
        'from'=>[
            'address'=>'bayscopes@gmail.com',
            'name'=>'BayScopes IT'
        ],

        'sendmail'=>'../Mailing/sendmail.php',
       
    ]

    
    ];


?>