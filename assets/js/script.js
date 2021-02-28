let images = document.querySelectorAll(".images img");
let modal = document.querySelector(".modal");
let modalImg = document.querySelector(".modalImg");
let modalTxt = document.querySelector(".modalTxt");
let close = document.querySelector(".close");

images.forEach((img) =>
	img.addEventListener("click", () => {
		modalImg.src = img.src;
		modalTxt.innerHTML = img.alt;

		modal.classList.add("appear");

		close.addEventListener("click", () => {
			modal.classList.remove("appear");
		});
		modal.addEventListener("click", () => {
			modal.classList.remove("appear");
		});
	})
);


