<?php

// Allow CORS
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD'])) {
        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Headers: X-Requested-With, content-type, access-control-allow-origin, access-control-allow-methods, access-control-allow-headers');
    }
    exit;
}

// Prepare headers output
header('Content-Type: application/json; Charset=UTF-8');
header('Access-Control-Allow-Origin: *');

$input = file_get_contents('php://input');
$inputArray = json_decode($input);

if ($inputArray->username == 'myusername' && $inputArray->password == 'mypassword') { // check for testing username & password
    header("HTTP/1.1 200 OK");
    echo '{"success": true}';
} else {
    header("HTTP/1.1 500");
    echo '{"success": false}';
}

// Log output for testing purposes
file_put_contents('output.txt', $input . PHP_EOL, FILE_APPEND);

?>