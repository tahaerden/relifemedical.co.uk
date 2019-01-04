<?
require("class.phpmailer.php");

$mail = new PHPMailer();

 if ( empty($_POST["name"]) || empty($_POST["email"]) ||  empty($_POST["message"]) ) {
 	echo "Error: Please fill the required fields.";
 	exit;
 }


$mail->SMTPDebug  = 1;
$mail->IsSMTP();                                   // send via SMTP
$mail->Host     = "mail.relifemedical.co.uk"; // SMTP servers
$mail->SMTPSecure = "tls";
$mail->Port = 587;     // SMTP Port
$mail->SMTPAuth = true;     // turn on SMTP authentication
$mail->Username = "info@relifemedical.co.uk";  // SMTP username
$mail->Password = "DaQ^#98)F93)"; // SMTP password

$mail->From     = "info@relifemedical.co.uk";
$mail->Fromname = "Relife Medical Contact Form";
$mail->AddAddress("info@relifemedical.co.uk");
$mail->Subject  =  "İletişim Formu: relifemedical.co.uk";
$mail->Body     =


"Adı Soyadı: " . $_POST["name"] . "\r\n" .
"E-posta: " . $_POST["email"] . "\r\n" .
"Mesaj: " . $_POST["message"]
;


if(!$mail->Send()) {

	echo $mail->ErrorInfo;
}
else{
	echo true;
}
?>
