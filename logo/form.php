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
		$q3 = "<b>Which brand inspire you the most?</b><br>".$_POST['q3'].'<br>';
	}

	if($_POST['q4'] !== ""){
		$q4 = "<b>What does your brand stands for?</b><br>".$_POST['q4'].'<br>';
	}

	if($_POST['q5'] !== ""){
		$q5 = "<b>Who are your direct and indirect competitors?</b><br>".$_POST['q5'].'<br>';
	}

	if($_POST['q6'] !== ""){
		$q6 = "<b>What's your business story?</b><br>".$_POST['q6'].'<br>';
	}

	if($_POST['q7'] !== ""){
		$q7 = "<b>What sets your brand apart from its competitors?</b><br>".$_POST['q7'].'<br>';
	}

	if($_POST['q8'] !== ""){
		$q8 = "<b>What's your brand's personality?</b><br>".$_POST['q8'].'<br>';
	}

	if($_POST['q9'] !== ""){
		
		if($_POST['q9'] <= 50){
			$_POST['q9'] = $_POST['q9'] . '% Classic';
		}
		else if($_POST['q9'] > 50){
			$_POST['q9'] = $_POST['q9'] . '% Modern';
		}
		
		$q9 = "<b>Tell us about your website preferences</b><br>".$_POST['q9'].'<br>';
	}

	if($_POST['q10'] !== ""){
		
		if($_POST['q10'] <= 50){
			$_POST['q10'] = $_POST['q10'] . '% Mature';
		}
		else if($_POST['q10'] > 50){
			$_POST['q10'] = $_POST['q10'] . '% Youthful';
		}
		
		$q10 = $_POST['q10'].'<br>';
	}

	if($_POST['q11'] !== ""){
				
		if($_POST['q11'] <= 50){
			$_POST['q11'] = $_POST['q11'] . '% Masculine';
		}
		else if($_POST['q11'] > 50){
			$_POST['q11'] = $_POST['q11'] . '% Feminine';
		}
		
		$q11 = $_POST['q11'].'<br>';
	}

	if($_POST['q12'] !== ""){
		
						
		if($_POST['q12'] <= 50){
			$_POST['q12'] = $_POST['q12'] . '% Playful';
		}
		else if($_POST['q12'] > 50){
			$_POST['q12'] = $_POST['q12'] . '% Sophisticated';
		}
		
		$q12 = $_POST['q12'].'<br>';
	}

	if($_POST['q13'] !== ""){
										
		if($_POST['q13'] <= 50){
			$_POST['q13'] = $_POST['q13'] . '% Economical';
		}
		else if($_POST['q13'] > 50){
			$_POST['q13'] = $_POST['q13'] . '% Luxurious';
		}
		
		$q13 = $_POST['q13'].'<br>';
	}

	if($_POST['q14'] !== ""){
								
		if($_POST['q14'] <= 50){
			$_POST['q14'] = $_POST['q14'] . '% Geometric';
		}
		else if($_POST['q14'] > 50){
			$_POST['q14'] = $_POST['q14'] . '% Organic';
		}
		
		$q14 = $_POST['q14'].'<br>';
	}

	if($_POST['q15'] !== ""){
										
		if($_POST['q15'] <= 50){
			$_POST['q15'] = $_POST['q15'] . '% Literal';
		}
		else if($_POST['q15'] > 50){
			$_POST['q15'] = $_POST['q15'] . '% Abstract';
		}
		
		$q15 = $_POST['q15'].'<br>';
	}

	if($_POST['q16'] !== ""){
		$q16 = "<b>Tell us about your color preferences</b><br>".$_POST['q16'].'<br>';
	}

	if($_POST['q17'] !== ""){
		$q17 = "<b>Do you need more than a logo?</b><br>".$_POST['q17'].'<br>';
	}

	if($_POST['q18'] !== ""){
		$q18 = "<b>Which brand inspire you the most?</b><br>".$_POST['q18'].'<br>';
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

	$results = $q1.'<br>'.$q2.'<br>'.$q3.'<br>'.$q4.'<br>'.$q5.'<br>'.$q6.'<br>'.$q7.'<br>'.$q8.'<br>'.$q9.'<br>'.$q10.'<br>'.$q11.'<br>'.$q12.'<br>'.$q13.'<br>'.$q14.'<br>'.$q15.'<br>'.$q16.'<br>'.$q17.'<br>'.$q16.'<br><br>'.$headline.'<br>'.$name.'<br>'.$email.'<br>'.$phone;
	
	//echo $results;

	$to = 'hello@datababa.io';							 
	$from = "DataBaba Logo Request <datababa.io>";
	$subject = 'New Onboarding Logo Request';
	$message = '<!DOCTYPE html>
	<html>
	<head>
	<meta charset="UTF-8">
	<title>New Onboarding Logo Request</title>
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
		echo "<h2>Thank you for submitting your request, we will get back to you soon.</h2>";
	}
	

endif;
?>