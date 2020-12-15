const form = document.getElementById('form')
const firstName = document.getElementById('firstName')
const message = document.getElementById('message')
const topic = document.getElementById('topic')
const email = document.getElementById('email')

form.addEventListener('submit',(e)=>{
	e.preventDefault()
	checkInputs()
});
function checkInputs(){
	const firstNameValue = firstName.value;
	const messageValue = message.value.trim();
	const topicValue = topic.value.trim();
	const emailValue = email.value;

	if (firstNameValue===''){
		setErrorFor(firstName)
	} else if (!isFirstName(firstNameValue)){
		setErrorFor(firstName)
	} else {
		setSuccessFor(firstName)
	}
	if (messageValue===''){
		setErrorFor(message)
	} else {
		setSuccessFor(message)
	}

	if (topicValue===''){
		setErrorFor(topic)
	} else {
		setSuccessFor(topic)
	}

	if (emailValue ==='') {
		setErrorFor(email)
	} else if (!isEmail(emailValue)) {
		setErrorFor(email)
	} else {
		setSuccessFor(email)
	}
}
function setErrorFor(input){
	const formControl = input.parentElement; 
	formControl.className = 'form-control error';
}
function setSuccessFor(input){
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
function isFirstName(firstName){
	return /^ *[A-Z]{1}(([a-z]{1})?(\'{1,})?[A-Za-z]{1,}){1}(([\s]{1,}[\-]{0,1}[\s]{1,}[A-Za-z]{1} *(([a-z]{1,})?(\'{1})?[a-z]{1,}){1}){1,})? *$/.test(firstName);

}
function isEmail(email){
	return /^ *([A-Za-z!#$%&'*+\-\/=?^{|}~z] *(( *[.](?! *[@]))?[\w!#$%&'*+\-\/=?^{|}~z])+)+ *@[^.] *([A-za-z0-9]{1,}| *[-.] *(?![-.])){1,} *\. *([^-][a-zA-Z]{1,}) *$/.test(email);
}

setInterval(function resize2() {
	let lWidth = document.documentElement.clientWidth
	console.log(lWidth)
	if( lWidth > 0 && lWidth<=576 ){
		$('.container3').removeClass('container3-768');
		$('.container3').removeClass('container3-991');
		$('.container3').removeClass('container3-1200');
		$('.container3').removeClass('container3-2700');
		$('.container3').removeClass('container3-576');
		$('.container3').toggleClass('container3-576');

		$('.contact').removeClass('contact-991');
		$('.message').removeClass('message-991');
		$('.page').removeClass('page-991');

		$('.contact').toggleClass('contact-991');
		$('.message').toggleClass('message-991');
		$('.page').toggleClass('page-991');

	}else if ( lWidth > 576 && lWidth<=678 ){
		$('.container3').removeClass('container3-576');
		$('.container3').removeClass('container3-991');
		$('.container3').removeClass('container3-1200');
		$('.container3').removeClass('container3-2700');
		$('.container3').removeClass('container3-768');		
		$('.container3').toggleClass('container3-768');

		$('.contact').removeClass('contact-991');
		$('.message').removeClass('message-991');
		$('.page').removeClass('page-991');

		$('.contact').toggleClass('contact-991');
		$('.message').toggleClass('message-991');
		$('.page').toggleClass('page-991');

	}else if ( lWidth > 678 && lWidth<=991 ){
		$('.container3').removeClass('container3-576');
		$('.container3').removeClass('container3-768');
		$('.container3').removeClass('container3-1200');
		$('.container3').removeClass('container3-2700');
		$('.container3').removeClass('container3-991');
		$('.container3').toggleClass('container3-991');

		$('.contact').removeClass('contact-991');
		$('.message').removeClass('message-991');
		$('.page').removeClass('page-991');

		$('.contact').toggleClass('contact-991');
		$('.message').toggleClass('message-991');
		$('.page').toggleClass('page-991');

	}else if ( lWidth > 991 && lWidth<=1200 ){
		$('.container3').removeClass('container3-576');
		$('.container3').removeClass('container3-768');
		$('.container3').removeClass('container3-991');
		$('.container3').removeClass('container3-2700');
		$('.container3').removeClass('container3-1200');		
		$('.container3').toggleClass('container3-1200');

		$('.contact').removeClass('contact-991');
		$('.message').removeClass('message-991');
		$('.page').removeClass('page-991');


	}else if ( lWidth > 1200 && lWidth<=2700 ){
		$('.container3').removeClass('container3-576');
		$('.container3').removeClass('container3-768');
		$('.container3').removeClass('container3-991');
		$('.container3').removeClass('container3-1200');
		$('.container3').removeClass('container3-2700');
		$('.container3').toggleClass('container3-2700');

		$('.contact').removeClass('contact-991');
		$('.message').removeClass('message-991');
		$('.page').removeClass('page-991');
	}	 
},1000)