<?php
/*error_reporting(E_ALL);
ini_set('display_errors', '1');*/
ob_start();
require_once 'phpmailer/PHPMailerAutoload.php';

if (isset($_POST['inputName']) && isset($_POST['inputEmail']) && isset($_POST['inputSubject']) && isset($_POST['inputMessage'])) {

    //check if any of the inputs are empty
    if (empty($_POST['inputName']) || empty($_POST['inputEmail']) || empty($_POST['inputSubject']) || empty($_POST['inputMessage'])) {
        ob_end_clean();
        $data = array('success' => false, 'message' => 'Please fill out the form completely.');
        echo json_encode($data);
        exit;
    }

    //create an instance of PHPMailer
    $mail = new PHPMailer();

	$mail->IsSMTP(); // enable SMTP
	$mail->SMTPDebug = 1; // debugging: 1 = errors and messages, 2 = messages only
	$mail->SMTPAuth = true; // authentication enabled
	$mail->SMTPSecure = 'ssl'; // secure transfer enabled REQUIRED for GMail
	$mail->Host = " smtp.mail.yahoo.com";
	$mail->Port = 465; // or 587
	$mail->IsHTML(false);
	$mail->Username = "sellforce@yahoo.se";
	$mail->Password = "adminadmin";
	$mail->AddAddress("sellforce@yahoo.se");
    $mail->From = "sellforce@yahoo.se";
    $mail->FromName = " "  .$_POST['inputName'];
    $mail->Subject = $_POST['inputSubject'];
    $mail->Body = "Name: " . $_POST['inputName'] . "\r\n\r\nMail: " . $_POST['inputEmail'] . "\r\n\r\nMessage: " . stripslashes($_POST['inputMessage']);

    if (isset($_POST['ref'])) {
        $mail->Body .= "\r\n\r\nRef: " . $_POST['ref'];
    }

    if(!$mail->send()) {
        ob_end_clean();
        $data = array('success' => false, 'message' => 'Meddelandet kunde inte skickas. Felmeddelande:');// . $mail->ErrorInfo);
        echo json_encode($data);
        exit;
    }
    ob_end_clean();
    $data = array('success' => true, 'message' => 'Tack! Vi har tagit emot ditt svar.');
    echo json_encode($data);

} else {
    ob_end_clean();
    $data = array('success' => false, 'message' => 'Var vänlig fyll i formuläret komplett.');
    echo json_encode($data);

}