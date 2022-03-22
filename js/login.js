
// register section


 // Name and Password from the register-form
var name = document.getElementById('name');
var pw = document.getElementById('pw');

// storing input from register-form
function store() {
    localStorage.setItem('name', nme.value);
    localStorage.setItem('pw', pw.value);
}

// user  Authentication 


// check if stored data from register-form is equal to entered data in the   login-form
function check(){
    // stored data from the register-form
    var storedName = localStorage.getItem('name');
    var storedPw = localStorage.getItem('pw')
    // entered data from the login-form
    var userName = document.getElementById('userName');
    var userPw = document.getElementById('userPw')
    // check if stored data from register-form is equal to data from login form
    if(userName.value == storedName && userPw.value == storedPw) {
        alert('Success.');
    }else {
        alert('Invalid Username/ password');
    }

    let btn = document.getElementById("btn");
    btn.addEventListener('click', event => {
      test();
    });
   
}