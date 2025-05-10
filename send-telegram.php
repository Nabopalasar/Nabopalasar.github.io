<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name    = $_POST['name'] ?? '';
    $email   = $_POST['email'] ?? '';
    $phone   = $_POST['phone'] ?? '';
    $message = $_POST['message'] ?? '';

    $token = '8076178360:AAEMNOLDYUjLEtvnE3SjEbEvXzlNzPbnf1g'; // замените на свой токен
    $chat_id = '386807281'; // замените на свой chat ID

    $text = "New message from website:\n\n" .
            "Name: $name\n" .
            "Email: $email\n" .
            "Phone: $phone\n" .
            "Message:\n$message";

    $data = [
        'chat_id' => $chat_id,
        'text' => $text
    ];

    $url = "https://api.telegram.org/bot$token/sendMessage";

    $options = [
        'http' => [
            'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
            'method'  => 'POST',
            'content' => http_build_query($data),
        ],
    ];

    $context  = stream_context_create($options);
    $result = file_get_contents($url, false, $context);

    if ($result === FALSE) {
        echo "Failed to send message.";
    } else {
        echo "Message sent successfully.";
    }
}