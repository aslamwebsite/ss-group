<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: X-Requested-With");

$remoteApiUrl = '/json/project.json';

// // Check if the request is an AJAX request
// if (isset($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) === 'xmlhttprequest') {
// } else {
//     echo json_encode(array('error' => 'Invalid request'));
// }

    if (filter_var($remoteApiUrl, FILTER_VALIDATE_URL)) {
        $remoteData = @file_get_contents($remoteApiUrl);
        
        if ($remoteData === false) {
            echo json_encode(array('error' => 'Failed to fetch data'));
        } else {
            header("Content-Type: application/json");
            echo $remoteData;
        }
    } else {
        echo json_encode(array('error' => 'Invalid API URL'));
    }
?>