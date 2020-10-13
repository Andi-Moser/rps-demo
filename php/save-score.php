<?php
    $pdo = new PDO('mysql:host=localhost;dbname=rps', 'vmadmin', 'sml12345');

    $username = $_POST['username'];
    $score = intval($_POST['score']);
    $time = time();

    $query = "INSERT INTO rps.scores(`user`, `score`, `created_at`) VALUES (:user, :score, :xyz)";

    $statement = $pdo->prepare($query);
    $statement->execute(array(':user' => $username, ':score' => $score, ':xyz' => $time));
?>

Saved!