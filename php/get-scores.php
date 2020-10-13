<?php
    $pdo = new PDO('mysql:host=localhost;dbname=rps', 'vmadmin', 'sml12345');

    $sql = "SELECT * FROM scores";

    ?>
    <table>
        <tr>
            <th>User</th>
            <th>Score</th>
            <th>Datum</th>
        </tr>
    <?php
    foreach ($pdo->query($sql) as $row) {
        $date = new DateTime();
        $date->setTimestamp($row['created_at']);
        ?>
        <tr>
            <td><?php echo $row['user']; ?></td>
            <td><?php echo $row['score']; ?></td>
            <td><?php echo $date->format('d.m.Y h:i'); ?></td>
        </tr>
        <?php
    }
?>
</table>