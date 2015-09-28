$(document).ready(function() {

	// Submit short link form
	$('#shortenLinkForm').submit(function(e){
		var url = $('#shortenLinkForm input[name="url"]').val();

		if(validateUrl(url)) {

			var data = {
				url: url
			};

			$.post('http://api.litzo.us/links', data, function(msg) {
			  $('.title').html('<a href="http://litzo.us/' + msg.code + '"><span>litzo.us</span>/' + msg.code + '</a>');
			});

		} else {
			$('.alert-bar .wrap span').text('ERROR: You must enter a valid URL');
			$('.alert-bar').css('display', 'block');
			return false;
		}

		e.preventDefault();
	});

	$('.alert-bar').on('click', '.close', function() {
		$('.alert-bar').css('display', 'none');
	});

	// URL regular expression test
	function validateUrl(url) {
    var regex = /(^|\s)((https?:\/\/)?[\w-]+(\.[\w-]+)+\.?(:\d+)?(\/\S*)?)/gi;
    return regex.test(url);
	}

});