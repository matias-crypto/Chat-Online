<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Simular la inserción de datos en la base de datos (por ahora solo imprimirlos)
    $email = $_POST['email'];
    echo "Usuario registrado con el correo electrónico: $email";
}
?>
