$(document).ready(function(){
	$('.header__burger').click(function(event){
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});
 setInterval(window.onresize = resize,1000)
function resize() {
	let lWidth = document.documentElement.clientWidth
	console.log(lWidth)
	if(lWidth >= 1 && lWidth < 768){
	$('.header__b').removeClass('header__burger');
	$('.body').toggleClass('lock');
	$('.header__logo').removeClass('header__logo-767');
	$('.header__body').removeClass('header__body-767');
	$('.header__menu').removeClass('header__menu-767');
	$('.header__list').removeClass('header__list-767');
	$('.header__link').removeClass('header__link-767');
	$('.activelink').removeClass('activelink-767');
	$('.content').toggleClass('content-767');

	$('.body').toggleClass('lock');
	$('.header__logo').toggleClass('header__logo-767');
	$('.header__body').toggleClass('header__body-767');
	$('.header__b').toggleClass('header__burger');
	$('.header__menu').toggleClass('header__menu-767');
	$('.header__list').toggleClass('header__list-767');
	$('.header__link').toggleClass('header__link-767');
	$('.activelink').toggleClass('activelink-767');
	$('.content').toggleClass('content-767');

	}else if (lWidth >= 768 && lWidth <=2700){
	$('body').removeClass('lock');
	$('.header__logo').removeClass('header__logo-767');
	$('.header__body').removeClass('header__body-767');
	$('.header__b').removeClass('header__burger');
	$('.header__menu').removeClass('header__menu-767');
	$('.header__list').removeClass('header__list-767');
	$('.header__link').removeClass('header__link-767');
	$('.activelink').removeClass('activelink-767');
	$('.content').removeClass('content-767');
	} 
}
resize();