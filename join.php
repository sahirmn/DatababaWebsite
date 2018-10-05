<?php

if(($_SERVER['REQUEST_METHOD'] === 'POST')):

	$image_response="";

	if(!empty($_FILES['q7']))
	{
		$targetfolder = "files/";
 		$targetfolder = $targetfolder . basename( $_FILES['q7']['name']) ;
		
		$file_ext = strtolower(end($_FILES['q7']['name']));
		
		$val=str_replace('.'.$file_ext, '-'.uniqid().'.'.$file_ext, $_FILES['q7']['name']);
				
		if(move_uploaded_file($_FILES['q7']['tmp_name'], 'files/'.$val))
		{
			//$image_response= "The file ".$val. " is uploaded";
			$image_response= '<a href="http://datababa.io/files/'.$val.'">Download Resume</a>';
		}
		else 
		{
			$image_response= "Problem uploading file";
		}
		
	}
	
	$q1 = $q2 = $q3 = $q4 = $q5 = $q6 = $q7 = $q8 = $q9 = $q10 = $q11 = $q12 = $q13 = $q14 = $q15 = $q16 = $name = $email = $phone = $headline = $results = "";

	if($_POST['q1'] !== ""){
		$q1 = "<b>Name</b><br>".$_POST['q1'].'<br>';
	}

	if($_POST['q2'] !== ""){
		$q2 = "<b>Email Address</b><br>".$_POST['q2'].'<br>';
	}

	if($_POST['q3'] !== ""){
		$q3 = "<b>Phone</b><br>".$_POST['q3'].'<br>';
	}

	if($_POST['q4'] !== ""){
		$q4 = "<b>Linkedin Profile</b><br>".$_POST['q4'].'<br>';
	}

	if($_POST['q5'] !== ""){
		$q5 = "<b>Behance Profile</b><br>".$_POST['q5'].'<br>';
	}

	if($_POST['q6'] !== ""){
		$q6 = "<b>Dribbble Profile</b><br>".$_POST['q6'].'<br>';
	}

	if($_POST['q7'] !== ""){
		$q7 = "<b>CV</b><br>".$image_response.'<br>';
	}


	$results = $q1.'<br>'.$q2.'<br>'.$q3.'<br>'.$q4.'<br>'.$q5.'<br>'.$q6.'<br>'.$q7;
	
	//echo $results;

	$to = 'hello@datababa.io';							 
	$from = "DataBaba <enquiry@datababa.com>";
	$subject = 'DataBaba New Resume';
	$message = '<!DOCTYPE html>
	<html>
	<head>
	<meta charset="UTF-8">
	<title>DataBaba New Resume</title>
	</head>
	<body style="margin:0px; font-family:Tahoma, Geneva, sans-serif;">
	<div style="padding:10px;"></div>
	<div style="font-size:14px;">
	'.$results.'
	</div>
	</body>
	</html>';
	$headers = "From: $from\n";
	$headers .= "To: $to\n";
	$headers .= "MIME-Version: 1.0\n";
	$headers .= "Content-type: text/html; charset=iso-8859-1\n";
	$mail=mail($to, $subject, $message, $headers);
	
	if(isset($mail)){
		echo "<h2>Thank you for submitting your request,<br> we will get back to you soon.</h2>";
	}


endif;
?>