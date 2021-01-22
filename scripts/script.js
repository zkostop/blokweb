// JavaScript Document
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
	coll[i].addEventListener("click", function () {
		this.classList.toggle("active");
		var content = this.nextElementSibling;
		if (content.style.display === "block") {
			content.style.display = "none";
		} else {
			content.style.display = "block";
		}
	});
}

// Scroll to top knop logica.

const scrollToTop = document.getElementById('go-to-top');

document.addEventListener("scroll", function () {
	const y = window.scrollY;

	if (y > 1) {
		scrollToTop.classList.remove('invisible');
		scrollToTop.classList.add('jumpIn');
	} else {
		scrollToTop.classList.add('invisible');
		scrollToTop.classList.remove('jumpIn');
	}
})

scrollToTop.addEventListener('click', function () {
	window.scrollTo(0, 0);
})

// Winkelwagen knop

const inWinkelmand = document.getElementById('in-winkelmand');

if (inWinkelmand !== null) {
	inWinkelmand.addEventListener('click', function () {
		if (!inWinkelmand.classList.contains('colorAnimation')) {
			inWinkelmand.classList.add('colorAnimation');
			setInterval(function () {
				inWinkelmand.classList.remove('colorAnimation');
			}, 3000);
		}
	})
}
