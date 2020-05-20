var line1 = document.querySelector('.burger-line1');
var line2 = document.querySelector('.burger-line2');
var burger = document.querySelector('.burger');
var menuMobile = document.querySelector('.menu-mobile');
var close = document.querySelector('.close');
var body = document.querySelector('body');

//Мобильное меню
burger.addEventListener('mouseover', function(){
	line1.style.width = 100 + '%';
	line2.style.width = 100 + '%';	
});
burger.addEventListener('mouseout', function(){
	line1.style.width = 80 + '%';
	line2.style.width = 60 + '%';
});
burger.addEventListener('click', function(){
	menuMobile.style.display = 'flex';
	body.style.overflow = 'hidden';

});
close.addEventListener('click', function(){
	menuMobile.style.display = 'none';
	body.style.overflow = 'visible';
});