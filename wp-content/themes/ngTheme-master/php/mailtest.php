<?php
require_once 'phpmailer/PHPMailerAutoload.php';
	$mail = new PHPMailer(); // create a new object
$mail->IsSMTP(); // enable SMTP
$mail->SMTPDebug = 1; // debugging: 1 = errors and messages, 2 = messages only
$mail->SMTPAuth = true; // authentication enabled
$mail->SMTPSecure = 'ssl'; // secure transfer enabled REQUIRED for GMail
$mail->Host = " smtp.mail.yahoo.com";
$mail->Port = 465; // or 587
$mail->IsHTML(true);
$mail->Username = "sellforce@yahoo.se";
$mail->Password = "adminadmin"
$mail->SetFrom("sellforce@yahoo.se");
$mail->Subject = "Test";
$mail->Body = "hello";
$mail->AddAddress("sellforce@yahoo.se");
 if(!$mail->Send())
    {
    echo "Mailer Error: " . $mail->ErrorInfo;
    }
    else
    {
    echo "Message has been sent";
    }
	
?>
	