
// register section


 // Name and Password from the register-form
var name = document.getElementById('nme');
var pw = document.getElementById('pw');
var pwConfirm = document.getElementById('pwc');
var yname = document.getElementById('yname');
var uname = document.getElementById('uname');
var phone = document.getElementById('phone');


// storing input from register-form
function store() {
    
        if (pw.value === pwc.value && pwc.value.length >1) {

            localStorage.setItem('name', nme.value);
            localStorage.setItem('pw', pw.value);
            localStorage.setItem('yname', yname.value);
            localStorage.setItem('uname', uname.value);
            localStorage.setItem('phone', phone.value);

            alert("Registration Successful! please go back to login");
        }
        else {
            alert("Mismatching passwords");
        };
    };
    
    




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

        window.open("pages/home.html", "_self");

    }else {
        alert('Invalid mail/password');
    }

    
};
document.getElementById("btn").addEventListener("click", function(event){
    event.preventDefault()
    check();
    clear();
  });
// document.getElementById("register").addEventListener("click", function(event){
//    event.preventDefault()
//    store();
//    clear();
// });
// let btn = document.getElementById("btn");
//     btn.addEventListener('click', event => {
//       check();
//     });
// let btnConfirm = document.getElementById("confirm");
//     btnConfirm.addEventListener('click', event => {
//       store();
//     });
   
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
    
});Lo
