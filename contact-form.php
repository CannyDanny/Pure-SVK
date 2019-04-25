<?php
if(isset($_POST['submit'])) {
  $name = $_POST['name'];
  $lastName = $_POST['last-name'];
  $email = $_POST['email'];
  $adress = $_POST['adress'];
  $color = $_POST['color'];
  $size = $_POST['size'];
  $comment = $_POST['comment'];

  $mailTo = 'plzak.denis@gmail.com';
  $headers = "Nova Objednavka";
  $txt = "You have received an email from ".$name.".\n\n".$comment;

  mail($mailTo, $headers, $txt);

  header("Location: index.php?mailsend");
}
