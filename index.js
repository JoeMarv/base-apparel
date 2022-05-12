document.getElementById('input').addEventListener('invalid', myFunction);

myFunction(){
    this.setCustomValidity('');
}

var email = document.getElementById('.input');
var success = document.getElementById('.success-message');
var empty = document.getElementById('.empty-message');
var fail = document.getElementById('.invalid-message');

function ValidateEmail(input) {
    var validRegex = /^[a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1}([a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1})*[a-zA-Z0-9]@[a-zA-Z0-9][-\.]{0,1}([a-zA-Z][-\.]{0,1})*[a-zA-Z0-9]\.[a-zA-Z0-9]{1,}([\.\-]{0,1}[a-zA-Z]){0,}[a-zA-Z0-9]{0,}$/i;
    if (input.value.match(validRegex)) {
        location.reload()
        success.style.display = 'block';
    } else {
        fail.style.display = 'block';
        email.classList.add('wrong-mail');
    }
}