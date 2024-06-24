<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $rating = htmlspecialchars($_POST['rating']);
    $comments = htmlspecialchars($_POST['comments']);

    $feedback = "Name: $name\nEmail: $email\nRating: $rating\nComments: $comments\n\n";

    // Instead of saving to a file, you can optionally send this data via email or store it in a database.
    // For demonstration, let's just output the feedback without saving it.
    
    echo "<p>Thank you for your feedback!</p>";
    echo "<p><strong>Name:</strong> $name</p>";
    echo "<p><strong>Email:</strong> $email</p>";
    echo "<p><strong>Rating:</strong> $rating</p>";
    echo "<p><strong>Comments:</strong> $comments</p>";
    echo "<p><a href='home.html'>Back to Home</a></p>";
} else {
    echo "<p>Invalid request.</p>";
}
?>
