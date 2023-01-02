<?php
    $nombre = $_POST['name'];
    $email = $_POST['email'];
    $tel = $_POST['phone'];
    $mensaje = $_POST['detail'];
    $formcontent="Nombre: $nombre \n E-mail: $email \n Telefono: $tel \n Mensaje: $mensaje";
    $recipient = "mkjofre@gmail.com";
    $subject = "Consultas";
    $header = "From: $email \r\n";
    $header .= "Content-Type: text/plain; charset=UTF-8";
    mail($recipient, $subject, $formcontent, $header) or die("Error!");
    header("Location:  ../index.html");
?>
