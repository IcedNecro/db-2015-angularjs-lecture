$(document).ready(function() {
	$('.header-search-string').focus(function() {
		$('.header-search-result').show()		
	});
	$('.header-search-string').focusout(function() {
		$('.header-search-result').hide()		
	});

})