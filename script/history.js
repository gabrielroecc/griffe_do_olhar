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
