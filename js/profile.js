var uname = localStorage.getItem('yname');
var username = localStorage.getItem('uname');
var email= localStorage.getItem('name');
var phone = localStorage.getItem('phone');

document.getElementById('name').innerHTML += uname;
document.getElementById('user').innerHTML += username;
document.getElementById('email').innerHTML += email;
document.getElementById('phone').innerHTML += phone;


function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#blah')
                .attr('src', e.target.result);
        };

        reader.readAsDataURL(input.files[0]);
    }
}
