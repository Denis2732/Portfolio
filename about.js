var design = document.querySelector('.design');
var coding = document.querySelector('.coding');
var life = document.querySelector('.life');
var btnDesign = document.querySelector('.about-me-btn-design');
var btnCoding = document.querySelector('.about-me-btn-coding');
var btnLife = document.querySelector('.about-me-btn-life');

//Обо мне, разношу по вкладкам 
btnDesign.addEventListener('click', function(){
	design.style.display = 'block';
	coding.style.display = 'none';
	life.style.display = 'none';
	btnDesign.classList.add('about-me-btn-activ');
	btnCoding.classList.remove('about-me-btn-activ');
	btnLife.classList.remove('about-me-btn-activ');
});

btnCoding.addEventListener('click', function(){
	design.style.display = 'none';
	coding.style.display = 'block';
	life.style.display = 'none';
	btnDesign.classList.remove('about-me-btn-activ');
	btnCoding.classList.add('about-me-btn-activ');
	btnLife.classList.remove('about-me-btn-activ');
});

btnLife.addEventListener('click', function(){
	design.style.display = 'none';
	coding.style.display = 'none';
	life.style.display = 'block';
	btnDesign.classList.remove('about-me-btn-activ');
	btnCoding.classList.remove('about-me-btn-activ');
	btnLife.classList.add('about-me-btn-activ');
});