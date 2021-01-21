const items = document.querySelectorAll(".heart");

items.forEach(function (item, index) {
	item.addEventListener("click", function () {
		item.classList.toggle('liked');
		if (item.classList.contains('liked')) {
			item.src = "https://upload.wikimedia.org/wikipedia/commons/1/10/Eo_circle_red_heart.svg";
		} else {
			item.src = "https://upload.wikimedia.org/wikipedia/commons/2/2f/Eo_circle_teal_white_heart.svg";
		}
	})
});
