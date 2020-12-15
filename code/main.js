const firstName = document.getElementById('firstName')
const phone = document.getElementById('phone')

form.addEventListener('submit',(e)=>{

	e.preventDefault()
	checkInputs()
});
function checkInputs(){

	const firstNameValue = firstName.value.trim();
	const phoneValue = phone.value.trim();


	if (firstNameValue===''){
		setErrorFor(firstName)
	} else if (!isFirstName(firstNameValue)){
		setErrorFor(firstName)
	} else {
		setSuccessFor(firstName)
	}
	if (phoneValue ==='') {
		setErrorFor(phone)
	} else if (!isePhone(phoneValue)) {
		setErrorFor(phone)
	} else {
		setSuccessFor(phone)
	}
}
function setErrorFor(input){
	const formControl = input.parentElement; //.formcontrol
	formControl.className = 'form-control error';
}
function setSuccessFor(input){
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
function isFirstName(firstName){
	return /^ *[A-Z]{1}(([a-z]{1})?(\'{1,})?[A-Za-z]{1,}){1}(([\s]{1,}[\-]{0,1}[\s]{1,}[A-Za-z]{1} *(([a-z]{1,})?(\'{1})?[a-z]{1,}){1}){1,})? *$/.test(firstName);

}
function isePhone(phone){
	return /^\+?[\s\-\(\)0-9]{7,19}$/.test(phone);
}



 setInterval(function resize() {
	let lWidth = document.documentElement.clientWidth
	console.log(lWidth)
	if(lWidth >= 1 && lWidth <= 576){
	  $('.info').removeClass('info768');
	  $('.group').removeClass('group768');
	  $('.car').removeClass('car768');
	  $('.carIcon').removeClass('carIcon768');
	  $('.form').removeClass('form768');

	  $('.info').toggleClass('info768');
	  $('.group').toggleClass('group768');
	  $('.car').toggleClass('car768');
	  $('.carIcon').toggleClass('carIcon768');
	  $('.form').toggleClass('form768');
	  $('.serv-column').removeClass('serv-column576 serv-column768');

	}else if (lWidth > 576 && lWidth <=768){
	  $('.info').removeClass('info768');
	  $('.group').removeClass('group768');
	  $('.car').removeClass('car768');
	  $('.carIcon').removeClass('carIcon768');
	  $('.form').removeClass('form768');
	  $('.serv-column').removeClass('serv-column576');


	  $('.info').toggleClass('info768');
	  $('.group').toggleClass('group768');
	  $('.car').toggleClass('car768');
	  $('.carIcon').toggleClass('carIcon768');
	  $('.form').toggleClass('form768');
	  $('.serv-column').removeClass('serv-column768');
	  $('.serv-column').toggleClass('serv-column576');


	}else if(lWidth > 768 && lWidth <= 2500){
	  $('.serv-column').removeClass('serv-column768');
	  $('.info').removeClass('info768');
	  $('.group').removeClass('group768');
	  $('.car').removeClass('car768');
	  $('.carIcon').removeClass('carIcon768');
	  $('.form').removeClass('form768');
	  $('.serv-column').removeClass('serv-column576');
	  $('.serv-column').toggleClass('serv-column768');

	  

}	 
},1000)

