/* Dark Mode Toggle:
classList.toggle("dark-mode") on <body>:
    Adds "dark-mode" if it isn't there -> dark theme
    Removes "dark-mode" if it is there -> light theme */
//Dark Mode checkbox
const darkModeToggle = document.getElementById("dark-mode-toggle");
//Listens for change event
darkModeToggle.addEventListener("click", function() {
    //Toggles dark-mode class on & off the body
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        darkModeToggle.textContent = "☀️";
    } else {
        darkModeToggle.textContent = "🌙"
    }
});
//Adds users name on the webpage 
const userName = prompt("Welcome! Please enter your name to enter:")
document.getElementById("name").value=userName
//Skills List Array
//Array of skills
const skills = [
    "HTML5", "CSS3", "JavaScript", "Java", "GitHub",
    "Object-Oriented Programming (OOP)",
    "Responsive Web Design"];
const skillsList = document.getElementById("skills-list");
//forEach() looping - runs once 
skills.forEach(function(skill) {
    const listItem = document.createElement("li");
    listItem.textContent = skill;
    skillsList.appendChild(listItem);
});
//Allow user to be notified when message has been sent
function submit () {
    event.preventDefault();
    alert("Your message has been sent!");
    const fields = document.querySelectorAll(".clear");
    fields.forEach(field => field.value = "");
}
var submitButton = document.getElementById("submit")
//Name input to use int the alert message
var nameInput = document.getElementById("name");
//Submit function
function submit(event) {
    //Page refresh prevented
    event.preventDefault();
    //Reads name of user in Name feild
    var userName = nameInput.value.trim();
    //Displays confirmation with name of user
    if (userName !== "") {
        alert("Thank you, " + userName + " , your message has been sent")
    } else {
        alert("Your message has been sent!")
    }
    //Clears form after submission
    const fields = document.querySelectorAll(".clear");
    fields.forEach(field => field.value = "");
}
submitButton.addEventListener("click", submit);
//No. of project paragraphs to determine 
const projectParagraphs = document.querySelectorAll("#projects-container p");
const projectCount = projectParagraphs.length;

const universityDiv = document.getElementById("university-resources");
const personalDiv = document.getElementById("personal-projects");

if (projectCount < 3) {
    //Fewer projects - both resource blocks are shown
    universityDiv.style.display = "block";
    personalDiv.style.display = "block";
} else {
    universityDiv.style.display = "none";
    personalDiv.style.display = "block";
}