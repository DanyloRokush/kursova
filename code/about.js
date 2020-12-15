// window.onresize = resize2

setInterval(function resize2() {
	let lWidth = document.documentElement.clientWidth
	console.log(lWidth)
	if( lWidth <= 991){
	$('.container-info').removeClass('container-info991');
	$('.container-info').toggleClass('container-info991');
	}else if (lWidth > 991){
	$('.container-info').removeClass('container-info991');
	 
}},1000)

