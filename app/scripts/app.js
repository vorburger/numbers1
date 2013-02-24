/**
 * numbers1 JS.
 *
 * @author Michael Vorburger
 */
define([], function() {
	var arrow = {
		left : 37,
		up : 38,
		right : 39,
		down : 40
	};

	var n = 0;
	//$("p").text("The DOM is now loaded and can be manipulated.");

	$(document).keydown(function(e) {
		switch (e.which) {

		case arrow.right:
			if (n < 10) {
				++n;
			}
			break;

		case arrow.left:
			if (n > 0) {
				--n;
			}
			break;

		default: return;
		}

		// For all handled keys (so unless default: return)..

		console.log("n = " + n);
		$("#number").text(n);
		for ( var i = 1; i < 9; i++) {
			if (i <= n) {
				$("#img" + i).css("visibility", "visible");
			} else {
				$("#img" + i).css("visibility", "hidden");
			}
		}

		// And lastly, this prevents default action (eg. page moving up/down)
	    // but consider accessibility (eg. user may want to use keys to choose a radio button)
		// TODO Is this really good?!
		e.preventDefault();
	});

	return "Hello from numbers1's app.js!";
});
