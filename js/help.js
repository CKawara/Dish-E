// // TEST JS FILE LINK
// let body = document.getElementById("submit");
//  body.style.backgroundColor ="blue";

let submit = document.getElementById("btn");
submit.addEventListener("click", (event) => {
  event.preventDefault();
  alertUser();

  document.getElementById("submit").reset();

})

const alertUser = () => {
  let nameValue = document.getElementById("nameValue").value;
  let emailValue = document.getElementById("emailValue").value;

  alert(`Hello there ${nameValue}! Your newsletter will be sent to email address: ${emailValue}`)

}


