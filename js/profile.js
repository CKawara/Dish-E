var uname = localStorage.getItem('yname');
var username = localStorage.getItem('uname');
var email= localStorage.getItem('name');
var phone = localStorage.getItem('phone');

document.getElementById('name').innerHTML += uname;
document.getElementById('user').innerHTML += username;
document.getElementById('email').innerHTML += email;
document.getElementById('phone').innerHTML += phone;
