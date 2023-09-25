new Glider(document.querySelector(".slider"), {
	slidesToShow: 5,
	slidesToScroll: 5,
	perView: 3,
	draggable: true,
	duration: 4,
	dots: ".dots",
	rewind: true,
	arrows: {
		prev: ".glide__prev",
		next: ".glide__next",
	},
});
new Glider(document.querySelector(".slider_2"), {
	slidesToShow: 5,
	slidesToScroll: 5,
	perView: 3,
	draggable: true,
	duration: 4,
	dots: ".dots",
	rewind: true,
	arrows: {
		prev: ".glide__prev_2",
		next: ".glide__next_2",
	},
});

let menuBtn = document.querySelector(".open_menu");
let menuMob = document.querySelector(".menu_mob");
menuBtn.addEventListener("click", () => {
	menuMob.classList.toggle("active");
	if (menuMob.classList.contains("active")) {
		menuBtn.classList.add("active");
	} else {
		menuBtn.classList.remove("active");
	}
});
