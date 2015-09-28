<?php

	$code = $_GET['code'];

	$url = 'http://api.litzo.us/links/' . $code;

	$ch = curl_init();
	// Disable SSL verification
	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
	// Will return the response, if false it print the response
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	// Set the url
	curl_setopt($ch, CURLOPT_URL,$url);
	// Execute
	$result=curl_exec($ch);
	// Closing
	curl_close($ch);

	$data = json_decode($result);

	header('Location: ' . $data->url);

?>