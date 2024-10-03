<?php
// Database connection
$conn = new mysqli("localhost", "root", "", "discussion_db");


// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get data from POST request
$username = $_POST['username'];
$comment = $_POST['comment'];

// Insert data into the database
$sql = "INSERT INTO discussions (username, comment) VALUES ('$username', '$comment')";
if ($conn->query($sql) === TRUE) {
    echo "Comment saved successfully!";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Close connection
$conn->close();
?>
