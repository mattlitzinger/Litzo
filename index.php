<!DOCTYPE HTML>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<title>Litzo | A Link Shortener</title>
	<meta name="description" content="">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
	<link rel="icon" href="favicon.png" type="image/x-icon">

	<link href="style.css" rel="stylesheet" type="text/css" />
</head>
<body>
	<div class="alert-bar">
		<div class="wrap">
			<span></span>
			<button class="close">&times;</button>
		</div>
	</div>
	<div class="wrap">
		<div class="main" role="main">

				<h1 class="title">litzo.us</h1>

				<form class="shorten-link-form" id="shortenLinkForm" method="POST">
					<input type="url" name="url" placeholder="Paste a link to shorten" aria-label="url" />
					<input type="submit" value="&#8594;" aria-label="shorten" />
				</form>

				<ul>
					<li>Created by <a href="https://twitter.com/mattlitzinger" target="_blank">@mattlitzinger</a></li>
					<li><a href="https://github.com/mattlitzinger/Litzo" target="_blank">View on GitHub</a></li>
				</ul>

		</div><!-- .main -->
	</div><!-- .page -->
</body>
	<script src="js/global.min.js" type="text/javascript"></script>
	<script>
	  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
	  ga('create', 'UA-11313037-10', 'auto');
	  ga('send', 'pageview');
	</script>
</html>