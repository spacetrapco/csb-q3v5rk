function showPopupOnCursorOut() {
	var popup = document.querySelector('[popup="cursor-out"]');
	var overlay = document.querySelector("#overlay");
	if (popup) {
		popup.style.display = "block";
		overlay.style.display = "block";
	} else {
		console.log("No elements with popup='cursor-out' found");
	}
}

function hidePopup() {
	var popup = document.querySelector('[popup="cursor-out"]');
	var overlay = document.querySelector("#overlay");
	if (popup) {
		popup.style.display = "none";
		overlay.style.display = "none";
	}
}

document.addEventListener("mouseout", function (event) {
	if (!event.relatedTarget && !event.toElement) {
		showPopupOnCursorOut();
	}
});

var closeBtn = document.querySelector("#close-btn");
closeBtn.addEventListener("click", hidePopup);

var overlay = document.querySelector("#overlay");
overlay.addEventListener("click", hidePopup);
