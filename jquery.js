$(document).ready(function(){
	$(".button").on('click', function() {
		$(".sidebar").toggleClass('visible');
		$(".button").toggleClass('visible');
		$(".portfolio").toggleClass('visible');
	});
});
