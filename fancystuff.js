$(document).ready(function() {
	$('body').css('display', 'none');
	$('body').fadeIn(600);
	$('a').click(function() {
		event.preventDefault();
		newLocation = this.href;
		$('body').fadeOut(600, newpage);
	});
	function newpage() {
		window.location = newLocation;
	}
});