document.addEventListener("DOMContentLoaded", function () {
	// Define the wrapper, overlay and close elements at the start
	var wrapper = document.querySelector('[st-popup="wrapper"]');
	var overlay = document.querySelector('[st-popup="overlay"]');
	var closeButton = document.querySelector('[st-popup="close"]');

	// Function to show the popup
	function showPopup() {
		wrapper.style.display = "block";
		overlay.style.display = "block";
	}

	// Function to hide the popup
	function hidePopup() {
		wrapper.style.display = "none";
		overlay.style.display = "none";
	}

	// Style the overlay and close button with a pointer cursor
	// overlay.style.cursor = "pointer";
	closeButton.style.cursor = "pointer";

	// Add click event to all elements with 'st-popup="trigger"' attribute
	document.body.addEventListener("click", function (event) {
		if (event.target.getAttribute("st-popup") === "trigger") {
			showPopup();
		}
	});

	// Add click event to the close button and overlay to hide the popup
	document.body.addEventListener("click", function (event) {
		if (
			event.target.getAttribute("st-popup") === "close" ||
			event.target.getAttribute("st-popup") === "overlay"
		) {
			hidePopup();
		}
	});
});
