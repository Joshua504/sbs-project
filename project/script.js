const menuBtn = document.querySelector(".harmburger");
const menuContainer = document.querySelector(".nav__linkcon");
const menuLinks = document.querySelectorAll(".nav__links");

menuBtn.addEventListener("click", () => {
	menuContainer.classList.toggle("active");
	menuBtn.classList.toggle("tog");
});

menuLinks.forEach((link) => {
	link.addEventListener("click", () => {
		menuContainer.classList.remove("active");
		menuBtn.classList.remove("tog");
	});
});
