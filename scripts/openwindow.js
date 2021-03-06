$(document).ready(function($) {
  $('.popup-open').click(function() {
		$('.gallery__modal-fade').fadeIn();
		return false;
	});

	$('.gallery__modal-close').click(function() {
		$(this).parents('.gallery__modal-fade').fadeOut();
		return false;
	});

	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.gallery__modal-fade').fadeOut();
		}
	});

	$('.gallery__modal-fade').click(function(e) {
		if ($(e.target).closest('.gallery__modal').length == 0) {
			$(this).fadeOut();
		}
	});
});
