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
