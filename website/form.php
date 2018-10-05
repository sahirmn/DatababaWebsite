<?php

if(($_SERVER['REQUEST_METHOD'] === 'POST')):
	
	$q1 = $q2 = $q3 = $q4 = $q5 = $q6 = $q7 = $q8 = $q9 = $q10 = $q11 = $q12 = $q13 = $q14 = $q15 = $q16 = $name = $email = $phone = $headline = $results = "";

	if($_POST['q1'] !== ""){
		$q1 = "<b>Do you currently have a website?</b><br>".$_POST['q1'].'<br>';
	}

	if($_POST['q2'] !== ""){
		$q2 = "<b>Link to your brand's website</b><br>".$_POST['q2'].'<br>';
	}

	if($_POST['q3'] !== ""){
		$q3 = "<b>Why are you looking for a new website?</b><br>".$_POST['q3'].'<br>';
	}

	if($_POST['q4'] !== ""){
		$q4 = "<b>What sort of a website are you looking for?</b><br>".$_POST['q4'].'<br>';
	}

	if($_POST['q5'] !== ""){
		$q5 = "<b>Are you looking for a specific platform?</b><br>".$_POST['q5'].'<br>';
	}

	if($_POST['q6'] !== ""){
		$q6 = "<b>What is your business about?</b><br>".$_POST['q6'].'<br>';
	}

	if($_POST['q7'] !== ""){
		$q7 = "<b>What specific services does your company provide?</b><br>".$_POST['q7'].'<br>';
	}

	if($_POST['q8'] !== ""){
		$q8 = "<b>Who is your target audience?</b><br>".$_POST['q8'].'<br>';
	}

	if($_POST['q9'] !== ""){
		$q9 = "<b>Who are your top competitors?</b><br>".$_POST['q9'].'<br>';
	}

	if($_POST['q10'] !== ""){
		$q10 = "<b>What do you want your customers to do on the website?</b><br>".$_POST['q10'].'<br>';
	}

	if($_POST['q11'] !== ""){
		$q11 = "<b>What sets you apart from your competitors?</b><br>".$_POST['q11'].'<br>';
	}

	if($_POST['q12'] !== ""){
		$q12 = "<b>What websites do you like the most and why?</b><br>".$_POST['q12'].'<br>';
	}

	if($_POST['q13'] !== ""){
		$q13 = "<b>Do you have a style guide or existing collateral? If so, please provide link(s).</b><br>".$_POST['q13'].'<br>';
	}

	if($_POST['q14'] !== ""){
		$q14 = "<b>Would you prefer illustrations or photos?</b><br>".$_POST['q14'].'<br>';
	}

	if($_POST['q15'] !== ""){
		$q15 = "<b>Do you have the content for your website?</b><br>".$_POST['q15'].'<br>';
	}

	if($_POST['q16'] !== ""){
		$q16 = "<b>How many pages do you want designed for your website?</b><br>".$_POST['q16'].'<br>';
	}

	if($_POST['q17'] !== ""){
		$q17 = "<b>Do you need more than a website?</b><br>".$_POST['q17'].'<br>';
	}

	if($_POST['q18'] !== ""){
		$q18 = "<b>Is there anything else you’d like to communicate?</b><br>".$_POST['q18'].'<br>';
	}

	if($_POST['fname'] !== "" || $_POST['lname'] !== ""){
		$name = "<b>Name</b><br>".$_POST['fname'].' '.$_POST['lname'].'<br>';
	}

	if($_POST['email'] !== ""){
		$email = "<b>Email</b><br>".$_POST['email'].'<br>';
	}

	if($_POST['phone'] !== ""){
		$phone = "<b>Contact No</b><br>".$_POST['phone'].'<br>';
	}

	

	$headline= '<div style="font-size:24px; font-weight:bold;">How do we reach out to you?</div>';

	$results = $q1.'<br>'.$q2.'<br>'.$q3.'<br>'.$q4.'<br>'.$q5.'<br>'.$q6.'<br>'.$q7.'<br>'.$q8.'<br>'.$q9.'<br>'.$q10.'<br>'.$q11.'<br>'.$q12.'<br>'.$q13.'<br>'.$q14.'<br>'.$q15.'<br>'.$q16.'<br><br>'.$headline.'<br>'.$name.'<br>'.$email.'<br>'.$phone;
	
	//echo $results;

	$to = 'hello@datababa.io';							 
	$from = "DataBaba Website <datababa.io>";
	$subject = 'New Onboarding Website Request';
	$message = '<!DOCTYPE html>
	<html>
	<head>
	<meta charset="UTF-8">
	<title>New Onboarding Website Request</title>
	</head>
	<body style="margin:0px; font-family:Tahoma, Geneva, sans-serif;">
	<div style="padding:10px;"></div>
	<div style="font-size:14px;">
	'.$results.'
	</div>
	</body>
	</html>';
	$headers = "From: $from\n";
	$headers .= "MIME-Version: 1.0\n";
	$headers .= "Content-type: text/html; charset=iso-8859-1\n";
	$mail=mail($to, $subject, $message, $headers);
	
	if(isset($mail)){
		echo "<h2>Thank you for submitting your request, we will get back to you soon.</h2>";
	}
	

endif;
?>