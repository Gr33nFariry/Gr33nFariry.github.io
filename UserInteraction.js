//Adds users name on the webpage 
const userName = prompt("Welcome! Please enter your name to enter:")
document.getElementById("name").value=userName
//Allow user to be notified when message has been sent
function submit () {
    event.preventDefault();
    alert("Your message has been sent!");
    const fields = document.querySelectorAll(".clear");
    fields.forEach(field => field.value = "");
}
var submitButton = document.getElementById("submit")
if (submitButton.addEventListener) {
    submitButton.addEventListener("click", submit, false);
} else if (submitButton.attachEvent) {
    submitButton.attachEvent("onclick", submit);
}