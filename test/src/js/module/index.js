/* 首页 */
seajs.use("jquery", function ($) {
	$(function() {
		var $contact = $("#contact-qq");
		if($contact.css("position") != "fixed") {
			var $win = $(window),
				staticTop = $contact.offset().top;
			$win.scroll(function(e) {
				var top = $win.scrollTop();
				$contact.stop().animate({
					top : top + staticTop
				});
			});
		}
	});
});