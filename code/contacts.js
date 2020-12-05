
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
	const messageValue = message.value;
	const topicValue = topic.value;
	const emailValue = email.value;



	if (firstNameValue===''){
		//error
		setErrorFor(firstName)
	} else if (!isFirstName(firstNameValue)){
		setErrorFor(firstName)
	} else {
		setSuccessFor(firstName)
	}
		if (messageValue===''){
		setErrorFor(message)
	} else if (!isMessage(messageValue)){
		seter(message)
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
	return /^[A-Z]{1}(([a-z]{1,})?(\'{1})?[A-Za-z]{1,}){1}(([\s|\-]{1}[A-Za-z]{1}(([a-z]{1,})?(\'{1})?[a-z]{1,}){1}){1,})?$/.test(firstName);

}
function isMessage(message){
	return /^[A-Z]{1}(([a-z]{1,})?(\'{1})?[A-Za-z]{1,}){1}(([\s|\-]{1}[A-Za-z]{1}(([a-z]{1,})?(\'{1})?[a-z]{1,}){1}){1,})?$/.test(lastName);
}


function isEmail(email){
	return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$/.test(pass);
}




