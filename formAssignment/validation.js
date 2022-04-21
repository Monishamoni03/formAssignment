const usernameInput = document.querySelector('#username');
const emailInput = document.querySelector('#email');
const phoneNumberInput = document.querySelector('#phonenumber');
const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#confirm-password');

function thanksPage() {
	window.location.href="thanks.html";
}

var nameValidation = 0;
var emailValidation = 0;
var phoneValidation = 0;
var passwordValidation = 0;
var confirmPasswordValidation = 0;


//first name
function validateName() {
	if(usernameInput.value.trim() == ''){
		setError(usernameInput,'Name cannot be blank');
		nameValidation = 0;
	}else if(isNameValid(usernameInput.value)){
		setSuccess(usernameInput);
		nameValidation = 1;
	}
	else{
		setError(usernameInput,'Name must be min 5 & max 15 characters & it should contain only alphabets');
		nameValidation = 0;
	}
}

//email
function validateEmail() {
	if(emailInput.value.trim() == ''){
		setError(emailInput,'Email cannot be blank');
		emailValidation = 0;
	}else if(isEmailValid(emailInput.value)){
		setSuccess(emailInput);
		emailValidation = 1;
	}else{
		setError(emailInput,'Invalid email');
		emailValidation = 0;
	}
}

//mobile number
function validatePhone() {
	if(phoneNumberInput.value.trim() == ''){
	   	setError(phoneNumberInput,'Mobile number cannot be blank');
		phoneValidation = 0;
    }else if(!isPhoneNumber(phoneNumberInput.value)){
	   	setError(phoneNumberInput,'Invalid Phone number');
		phoneValidation = 0;
    }else{
	   	setSuccess(phoneNumberInput);
		phoneValidation = 1;
	}
}

//password
function validatePassword() {
	if(passwordInput.value.trim() == ''){
		setError(passwordInput,'Password cannot be blank');
		passwordValidation = 0;
	}else if (!isPassword(passwordInput.value)) {
		setError(passwordInput,'Invalid Password');
		passwordValidation =  0;
	}else {
		setSuccess(passwordInput);
		passwordValidation = 1;
	}
}

//confirm password
function validateConfirmPassword() {
	if(confirmPasswordInput.value.trim() == '') {
		setError(confirmPasswordInput,'Confirm Password cannot be blank');
		confirmPasswordValidation = 0;
	}else if (confirmPasswordInput.value!==passwordInput.value) {
		setError(confirmPasswordInput,'Password does not match');
		confirmPasswordValidation = 0;
	}else {
		setSuccess(confirmPasswordInput);
		confirmPasswordValidation = 1;
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

//dob validation
date.onchange = (event) => {
	const date = event.target.value;//date in String
	const dateFormat = new Date(date);//date in date
	const currentDate = new Date();
	const dateDiff = currentDate.getFullYear()-dateFormat.getFullYear();
	if(dateDiff >= 18 && dateDiff <= 60){
		event.target.nextElementSibling.textContent = '';
	}
	else{
		alert("Age should be between 18 to 60");
	}
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


function othersPage() {
	if(nameValidation == 1 && emailValidation == 1 && check4 == 1 && check5 == 1) {
		next1.onclick = function(){
			form1.style.left = "-400px";
			form2.style.left = "20px";
		}
		prev1.onclick = function(){
			form1.style.left = "20px";
			form2.style.left = "400px";
		}
	}
	else{
        alert("Please fill all the required details to move to the next step");
    }
}

function workPage() {
	if(check3 == 1) {
		next2.onclick = function(){
			form2.style.left = "-400px";
			form3.style.left = "20px";
		}
		prev2.onclick = function(){
			form2.style.left = "20px";
			form3.style.left = "400px";
		}
	}
	else{
        alert("Please fill all the required details to move to next step");
    }
}

function educationPage() {
	next3.onclick = function(){
		form3.style.left = "-400px";
		form4.style.left = "20px";
	}
	prev3.onclick = function(){
		form3.style.left = "20px";
		form4.style.left = "400px";
	}
}

function teamPage() {
	next4.onclick = function(){
		form4.style.left = "-400px";
		form5.style.left = "20px";
	}
	prev4.onclick = function(){
		form4.style.left = "20px";
		form5.style.left = "400px";
	}
}
/*function page5() {
	if(checkbox.checked == true) {
	next4.onclick = function(){
		form4.style.left = "-400px";
		form5.style.left = "20px";
	}
	prev4.onclick = function(){
		form4.style.left = "20px";
		form5.style.left = "400px";
	}
  } else {
	   alert("Please accept the terms and condition");
  }
}
/*next1.onclick = function(){
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
}*/


/*next1.onclick = () => {
	var inputFields = document.getElementsByClassName('className');
	var flag = true;
	for(index=0;index<inputFields.length;index++)
	{
		if(inputFields[index].value=='')
		{
			flag=false;
			//alert('Please fill this field');
			inputFields[index].nextElementSibling.textContent = 'Please fill this field';
		}
	}
	if(flag)
	next1();
}*/
