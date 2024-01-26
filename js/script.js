const navBtn = document.querySelector('.nav__burger');
const navMenu = document.querySelector('.hidden');

navBtn.addEventListener('click', () => {
	navMenu.classList.toggle('hidden');
	navBtn.classList.toggle('burger__rotate');
});
