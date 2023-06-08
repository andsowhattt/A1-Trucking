import Swiper, { Navigation } from 'swiper';

Swiper.use([Navigation]);

const swiper = new Swiper('.main__slider', {
	slidesPerView: 1,
	spaceBetween: 1,
	loop: true,
	speed: 1000,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	breakpoints: {
		646: {
			slidesPerView: 2,
		},
		1169: {
			slidesPerView: 3,
		},
		1553: {
			slidesPerView: 4,
		},
	},

});