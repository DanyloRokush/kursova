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
		setErrorFor(firstName)
	} else if (!isFirstName(firstNameValue)){
		setErrorFor(firstName)
	} else {
		setSuccessFor(firstName)
	}
		if (modelValue===''){
		setErrorFor(model)
	} else if (!isModel(modelValue)){
		setErrorFor(model)
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
	}else if (!isBrand(brandValue)) {
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
	return /^ *[A-Z]{1}(([a-z]{1})?(\'{1,})?[A-Za-z]{1,}){1}(([\s]{1,}[\-]{0,1}[\s]{1,}[A-Za-z]{1} *(([a-z]{1,})?(\'{1})?[a-z]{1,}){1}){1,})? *$/.test(firstName);

}
function isModel(model){
	return /^[A-Z]{0,}[a-z]{3,}[\s]{0,}[\-]{0,}$/.test(model);
}

function isYear(year){
	return /^[1-2]{1}[90]{1}[0-9]{2}$/.test(year);
}
function isNumber(number){
	return /^\+?[\s\-\(\)0-9]{7,19}$/.test(number);
}
function isBrand(brand){
	return /^[A-Z]{0,}[a-z]{3,}[\s]{0,}[\-]{0,}$/.test(brand);
}


// window.onresize = resize
setInterval(function resize() {
	let lWidth = document.documentElement.clientWidth
	console.log(lWidth)
	if(lWidth >= 1 && lWidth < 768){
	 $('.steps_block').removeClass('steps_block-768');

	}else if (lWidth >= 768 && lWidth <=2700){
	$('.steps_block').removeClass('steps_block-768');
	$('.steps_block').toggleClass('steps_block-768');
	} 
},1000)

