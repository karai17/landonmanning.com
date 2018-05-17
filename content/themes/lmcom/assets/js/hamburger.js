function open_hamburger() {
	$("#hamburger-menu").addClass("open");
	$("#content").addClass("open");
	$("#overlay").addClass("open");
}

function close_hamburger() {
	$("#hamburger-menu").removeClass("open");
	$("#content").removeClass("open");
	$("#overlay").removeClass("open");
}

$(document).ready(function() {
	$("#hamburger").click(function() {
		if ($("#hamburger-menu").hasClass("open")) {
			close_hamburger();
		} else {
			open_hamburger();
		}
	});

	$(".nav-contact").click(function() {
		close_hamburger();
	});

	$("#overlay").click(function() {
		close_hamburger();
	});
});
