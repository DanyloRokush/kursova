
const form = document.getElementById('form')
const firstName = document.getElementById('firstName')
const model = document.getElementById('model')
const year = document.getElementById('year')
const brand = document.getElementById('brand')
const number = document.getElementById('number')



form.addEventListener('submit',(e)=>{
	e.preventDefault()
	checkInputs()
});

function checkInputs(){
	const firstNameValue = firstName.value;
	const modelValue = model.value;
	const yearValue = year.value;
	const brandValue = brand.value;
	const numberValue = number.value;



	if (firstNameValue===''){
		//error
		setErrorFor(firstName)
	} else if (!isFirstName(firstNameValue)){
		setErrorFor(firstName)
	} else {
		setSuccessFor(firstName)
	}
		if (modelValue===''){
		setErrorFor(model)
	} else if (!isModel(modelValue)){
		seter(model)
	} else {
		setSuccessFor(model)
	}

	if (yearValue ==='') {
		setErrorFor(year)
	} else if (!isYear(yearValue)) {
		setErrorFor(year)
	} else {
		setSuccessFor(year)
	}

	if (brandValue===''){
		setErrorFor(brand)
	} else {
		setSuccessFor(brand)
	}

	if (numberValue ==='') {
		setErrorFor(number)
	} else if (!isNumber(numberValue)) {
		setErrorFor(number)
	} else {
		setSuccessFor(number)
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
	return /^[A-Z]{1}(([a-z]{1,})?(\'{1})?[A-Za-z]{1,}){1}(([\s|\-]{1}[A-Za-z]{1}(([a-z]{1,})?(\'{1})?[a-z]{1,}){1}){1,})?$/.test(firstName);

}
function isModel(model){
	return /^[A-Z]{1}(([a-z]{1,})?(\'{1})?[A-Za-z]{1,}){1}(([\s|\-]{1}[A-Za-z]{1}(([a-z]{1,})?(\'{1})?[a-z]{1,}){1}){1,})?$/.test(lastName);
}

function isYear(year){
	return /([A-Za-z!#$%&'*+\-\/=?^{|}~z](([.](?![@]))?[\w!#$%&'*+\-\/=?^{|}~z])+)+@([A-za-z0-9]{1,63}|[-.](?![-.])){1,12}\.[^-][a-zA-Z]{2,6}/.test(eMail);
}
function isNumber(number){
	return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$/.test(pass);
}




