document.getElementById('email1').addEventListener('invalid', myFunction);
var email = document.querySelector('.email1')
var success = document.querySelector('.success-message')
var fail = document.querySelector('.invalid-message')

function myFunction() {
    this.setCustomValidity(' ');
} 

function ValidateEmail(input) {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9]+)*$/;
    if (input.value.match(validRegex)) {
        location.reload();
        success.style.display = 'block';
        fail.style.display = 'none';
        return true;
    } 
    else {
        email1.classList.add('wrong-email');
        fail.style.display = 'block';
        success.style.display = 'none'
        return false;
    }
    
};
