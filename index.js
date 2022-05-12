document.getElementById('input1').addEventListener('invalid', myFunction);

myFunction() {
    this.setCustomValidity('');
}

var email = document.getElementById('.email1');
var success = document.getElementById('.success-message');
var fail = document.getElementById('.invalid-message');

function ValidateEmail(email1) {
    var validRegex = /^[a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1}([a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1})*[a-zA-Z0-9]@[a-zA-Z0-9][-\.]{0,1}([a-zA-Z][-\.]{0,1})*[a-zA-Z0-9]\.[a-zA-Z0-9]{1,}([\.\-]{0,1}[a-zA-Z]){0,}[a-zA-Z0-9]{0,}$/i;
    if (email1.value.match(validRegex)) {
        location.reload()
        success.style.display = 'block';
    } else {
        fail.style.display = 'block';
        email.classList.add('wrong-email');
    }
}
