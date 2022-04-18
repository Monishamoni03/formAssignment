const usernameInput = document.querySelector('#username');
const emailInput = document.querySelector('#email');
const phoneNumberInput = document.querySelector('#phonenumber');
const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#confirm-password');

function newPage() {
	window.location.href="thanks.html";
}

function validateName() {
	//first name
	if(usernameInput.value.trim() == ''){
		setError(usernameInput,'Name cannot be blank');
	}else if(isNameValid(usernameInput.value)){
		setSuccess(usernameInput);
	}
	else{
		setError(usernameInput,'Name must be min 5 & max 15 characters & it should contain only alphabets');
	}
}

function validateEmail() {
	//email
	if(emailInput.value.trim() == ''){
		setError(emailInput,'Email cannot be blank');
	}else if(isEmailValid(emailInput.value)){
		setSuccess(emailInput);
	}else{
		setError(emailInput,'Invalid email');
	}
}

function validatePhone() {
	//mobile number
	if(phoneNumberInput.value.trim() == ''){
	   	setError(phoneNumberInput,'Mobile number cannot be blank');
    }else if(!isPhoneNumber(phoneNumberInput.value)){
	   	setError(phoneNumberInput,'Invalid Phone number');
    }else{
	   	setSuccess(phoneNumberInput);
	}
}

function validatePassword() {
	//password
	if(passwordInput.value.trim() == ''){
		setError(passwordInput,'Password cannot be blank');
	}else if (!isPassword(passwordInput.value)) {
		setError(passwordInput,'Invalid Password');
	}else{
		setSuccess(passwordInput);
	}
}

function validateConfirmPassword() {
	//confirm password
	if(confirmPasswordInput.value.trim() == ''){
		setError(confirmPasswordInput,'Confirm Password cannot be blank');
	}else if (confirmPasswordInput.value!==passwordInput.value){
		setError(confirmPasswordInput,'Password does not match');
	}else{
		setSuccess(confirmPasswordInput);
	}
}

function setError(element,errorMessage) {
	const parent = element.parentElement;
	if(parent.classList.contains('success')){
		parent.classList.remove('success');
	}
	parent.classList.add('error');
	const paragraph = parent.querySelector('p');
	paragraph.textContent = errorMessage;
}

function setSuccess(element) {
	const parent = element.parentElement;
	if(parent.classList.contains('error')){
		parent.classList.remove('error');
	}
	parent.classList.add('success');
}

function isNameValid(username) {
	const alphabets = /^[A-Za-z]+$/;
	return alphabets.test(username);
}
function isEmailValid(email) {
	const reg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
	return reg.test(email);
}
function isPhoneNumber(phonenumber) {
	const phoneNumberPattern = /^(0|[+91]{3})?[6-9][0-9]{9}$/;
	return phoneNumberPattern.test(phonenumber);
}
function isPassword(password) {
	var passwordPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,15}$/;
	return passwordPattern.test(password);
}  

var form1 = document.getElementById('form-1');
var form2 = document.getElementById('form-2');
var form3 = document.getElementById('form-3');
var form4 = document.getElementById('form-4');
var form5 = document.getElementById('form-5');
 
var next1 = document.getElementById('next1');
var next2 = document.getElementById('next2');
var next3 = document.getElementById('next3');
var next4 = document.getElementById('next4');

var prev1 = document.getElementById('prev1');
var prev2 = document.getElementById('prev2');
var prev3 = document.getElementById('prev3');
var prev4 = document.getElementById('prev4');

next1.onclick = function(){
    form1.style.left = "-400px";
    form2.style.left = "20px";
}
prev1.onclick = function(){
    form1.style.left = "20px";
    form2.style.left = "400px";
}

next2.onclick = function(){
    form2.style.left = "-400px";
    form3.style.left = "20px";
}
prev2.onclick = function(){
    form2.style.left = "20px";
    form3.style.left = "400px";
}

next3.onclick = function(){
    form3.style.left = "-400px";
    form4.style.left = "20px";
}
prev3.onclick = function(){
    form3.style.left = "20px";
    form4.style.left = "400px";
}

next4.onclick = function(){
    form4.style.left = "-400px";
    form5.style.left = "20px";
}
prev4.onclick = function(){
    form4.style.left = "20px";
    form5.style.left = "400px";
}