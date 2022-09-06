<?php
	
	
	
	$key = "6LcW5p4hAAAAAFMp0Md8PeVvtu8p3nrjqOsUUMzI"; // Google Recaptcha Secret Key
	$email_to = 'mohammed.khaled.mahmoud1996@gmail.com';  // Your email address
	
	
	
	$name;
	$email;
	$mobile;
	$subject;
	$message;
	$captcha;
	
	if(isset($_POST['name'])){
		$name = @trim(stripslashes($_POST['name']));
	} 
	if(!$name){
		echo '<script>alert("Please fill the name form!");</script>';
		echo '<meta HTTP-EQUIV="REFRESH" content="0; url=index.html">';
		exit;
	}
	if(isset($_POST['email'])){
		$email = @trim(stripslashes($_POST['email']));  
	}
	if(!$email){
		echo '<script>alert("Please fill the email form!");</script>';
		echo '<meta HTTP-EQUIV="REFRESH" content="0; url=index.html">';
		exit;
	}
if(isset($_POST['mobile'])){
		$mobile = @trim(stripslashes($_POST['mobile']));
	} 
	if(!$mobile){
		echo '<script>alert("Please fill the mobile form!");</script>';
		echo '<meta HTTP-EQUIV="REFRESH" content="0; url=index.html">';
		exit;
	}

	if(isset($_POST['subject'])){
		$subject= @trim(stripslashes($_POST['subject'])); 
	}
	if(!$subject){
		echo '<script>alert("Please fill the subject form!");</script>';
		echo '<meta HTTP-EQUIV="REFRESH" content="0; url=index.html">';
		exit;
	}
	if(isset($_POST['message'])){
		$message = @trim(stripslashes($_POST['message'])); 
	} 
	if(!$message){
		echo '<script>alert("Please fill the message form!");</script>';
		echo '<meta HTTP-EQUIV="REFRESH" content="0; url=index.html">';
		exit;
	}
	if(isset($_POST['g-recaptcha-response'])){
		$captcha = $_POST['g-recaptcha-response'];
	}
	if(!$captcha){
		echo '<script>alert("Please check the captcha form!");</script>';
		echo '<meta HTTP-EQUIV="REFRESH" content="0; url=index.html">';
		exit;
	}
	
	$response = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=".$key."&response=".$captcha."&remoteip=".$_SERVER['REMOTE_ADDR']);
	
	if($response.success==false){
		echo '<h2>You are spammer! Get the Out!</h2>';
	} else {
		
		$title = $subject;
		
		@mail($email_to, $title, '<b>Name:</b> ' .$name . "\n\n" . '<b>Email:</b> ' .$email. "\n\n" .'<b>Mobile:</b> ' .$mobile . "\n\n" .'<b>Subject:</b> ' .$subject. "\n\n" . 'Message: ' .$message);
		
		echo '<script>alert("Thank you! Your message has been successfully sent. So Thank you on your message and we will contact you soon.!");</script>';
		echo '<meta HTTP-EQUIV="REFRESH" content="0; url=index.html">';
	}
	
?>
