const burger = document.querySelector('.nav__burger');
const activeElement = document.querySelectorAll('.show');

burger.addEventListener('click', function () {
	for (let i = 0; i < activeElement.length; i++) {
		activeElement[i].classList.toggle('show');
	}
	burger.classList.toggle('burger__rotate');
});
