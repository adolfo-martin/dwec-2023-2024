<?php
$con = mysqli_connect("10.0.0.3", "adolfo", "Hola1234", "hardware_solutions");

if (mysqli_connect_errno()) {
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
    exit;
}

$result = mysqli_query($con, "SELECT * FROM products");

echo "<table border='1'>
        <tr>
            <th>Producto</th>
            <th>Precio</th>
        </tr>";

while ($row = mysqli_fetch_array($result)) {
    echo "<tr>";
    echo "<td>" . $row['product_name'] . "</td>";
    echo "<td>" . $row['list_price'] . "</td>";
    echo "</tr>";
}

echo "</table>";

mysqli_close($con);
?>