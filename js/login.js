
// register section


 // Name and Password from the register-form
var name = document.getElementById('nme');
var pw = document.getElementById('pw');
var pwConfirm = document.getElementById('pwc')


// storing input from register-form
function store() {
    if (pw.value === pwc.value && pwConfirm !=null){
        localStorage.setItem('name', nme.value);
        localStorage.setItem('pw', pw.value);
        alert("registration Successful please go back to login")
    }
    else {
        alert("Mismatching passwords")
    }
     


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
        alert('Success.')
        window.open("http://127.0.0.1:5500/pages/home.html");
    }else {
        alert('Invalid Username/ password');
    }

    
}
let btn = document.getElementById("btn");
    btn.addEventListener('click', event => {
      test();
    });
let btnConfirm = document.getElementById("confirm");
    btnConfirm.addEventListener('click', event => {
      store();
    });
   
// user registration section
$(document).ready(function(){
    $("button#register").click(function(){
        $(".layout").hide();
        $(".reg").show();
    })
    $("button#back").click(function(){
        $(".layout").show();
        $(".reg").hide();
    })
    
})