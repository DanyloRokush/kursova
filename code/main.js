const firstName = document.getElementById('firstName')
const phone = document.getElementById('phone')

form.addEventListener('submit',(e)=>{

	e.preventDefault()
	checkInputs()
});
function checkInputs(){

	const firstNameValue = firstName.value;
	const phoneValue = phone.value;


	if (firstNameValue===''){
		//error
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
	return /[a-z]/.test(firstName);

}
function isePhone(phone){
	return /[a-z]/.test(phone);
}