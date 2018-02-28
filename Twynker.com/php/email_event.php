<?php

$errors = [];

if(!array_key_exists('Mail', $_POST) || $_POST['Mail'] == '' || !filter_var($_POST['Mail'], FILTER_VALIDATE_EMAIL)){
	$errors['Mail'] = 'Veuillez renseigner un e-Mail valide';
}

session_start();
if (!empty($errors)) {
	$_SESSION['errors'] = $errors;
	$_SESSION['inputs'] = $_POST;
	header('Location: index.php');
}
else{
	$_SESSION['success'] = 1;
	$to = 'contact@twynker.com';
	$subject = 'Demande de contact pour '.$_POST['Category'];
	$Message = 'Nom: '.$_POST['Nom']."\n".'Prénom: '.$_POST['Prenom']."\n".'TEL: '.$_POST['Phone']."\n".'E-Mail: '.$_POST['Mail']."\n"."\n".$_POST['Message'];
	$headers = 'FROM: '. $_POST['Mail'];
	mail($to, $subject, $Message, $headers);
	header('Location: Contact.php');
}
?>
