<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $rating = htmlspecialchars($_POST['rating']);
    $comments = htmlspecialchars($_POST['comments']);

    $feedback = "Name: $name\nEmail: $email\nRating: $rating\nComments: $comments\n\n";

    file_put_contents('feedback.txt', $feedback, FILE_APPEND);

    echo "<p>Thank you for your feedback!</p>";
    echo "<p><a href='home.html'>Back to Home</a></p>";
} else {
    echo "<p>Invalid request.</p>";
}
?>
