<?php


if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Assuming form data is sent via POST method
    require 'request.php';

    $paymentDetails = [
        'card_number' => $_POST['card_number'],
        'expiry_date' => $_POST['expiry_date'],
        'cvv' => $_POST['cvv'],
        // Add other required fields
    ];

    // Validate and sanitize input data here

    // Initialize the Request class with your API URL
    $request = new Request('https://localhost:8000/api/v1');

    // Send payment details to the payment gateway
    $paymentResponse = $request->sendRequest('POST', '/client/checkout', $paymentDetails);

     return $paymentResponse;

    // Check payment response and proceed accordingly
    if ($paymentResponse['status'] == 'success') {
        // Payment was successful, initialize checkout session or process further
        $checkoutData = [
            // Prepare checkout data
        ];
        $checkoutResponse = $request->initializeCheckoutSession($checkoutData);

        // Handle checkout response
        if ($checkoutResponse['status'] == 'success') {
            // Redirect to success page or perform additional actions
        } else {
            // Handle errors
        }
    } else {
        // Handle payment errors
    }
}