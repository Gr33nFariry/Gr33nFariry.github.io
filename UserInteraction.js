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
var submitButton = document.getElementById("submit")
//Name input to use int the alert message
var nameInput = document.getElementById("name");
//Timed Formed Submission Confirmation
function submit(event) {
    // Step 1: Prevent default page refresh on submit
    event.preventDefault();

    // Read the user's name from the Name field
    var userName = nameInput.value.trim();

    // Step 2: Create and display a "Sending..." loading message
    // Remove any previous status message first to avoid duplicates
    const existingStatus = document.getElementById("form-status");
    if (existingStatus) {
        existingStatus.remove();
    }

    const statusMsg = document.createElement("p");
    statusMsg.id = "form-status";
    statusMsg.textContent = "⏳ Sending your message...";
    statusMsg.style.color = "#4f46e5";
    statusMsg.style.fontStyle = "italic";
    statusMsg.style.marginTop = "8px";

    // Insert the loading message right after the submit button
    submitButton.insertAdjacentElement("afterend", statusMsg);

    // Disable the button so the user can't double-submit
    submitButton.disabled = true;

    // Step 3: Use setTimeout() to delay the confirmation by 2.5 seconds
    setTimeout(function () {
        // Step 4: Replace loading message with confirmation message
        if (userName !== "") {
            statusMsg.textContent = "✅ Message sent successfully! Thank you, " + userName + ".";
        } else {
            statusMsg.textContent = "✅ Message sent successfully!";
        }
        statusMsg.style.color = "#16a34a"; // green
        statusMsg.style.fontStyle = "normal";

        // Clear all form fields after confirmation appears
        const fields = document.querySelectorAll(".clear");
        fields.forEach(field => field.value = "");

        // Re-enable the submit button
        submitButton.disabled = false;
    }, 2500); // 2.5 second delay
}
submitButton.addEventListener("click", submit);
//Delayed Notification Banner
//setTimeout(), document.createElement(), appendChild()
setTimeout(function () {
    // Create the banner container
    const notification = document.createElement("div");
    notification.id = "site-notification";

    // Create the message text
    const message = document.createElement("span");
    message.textContent = "🎉 Welcome to my portfolio! A new project has just been added — check it out below!";

    // Create a close (×) button so the user can dismiss it
    const closeBtn = document.createElement("button");
    closeBtn.textContent = "×";
    closeBtn.classList.add("close-btn");
    closeBtn.title = "Dismiss";
    closeBtn.addEventListener("click", function () {
        notification.remove();
    });

    // Assemble and insert at the very top of <body>
    notification.appendChild(message);
    notification.appendChild(closeBtn);
    document.body.insertBefore(notification, document.body.firstChild);
}, 2000); // 2 000 ms = 2-second delay
//Adds new Proj. Para.
//document.createElement(), appendChild(), innerHTML
const article = document.querySelector("article");

if (article) {
    // Outer wrapper div
    const newProjectEntry = document.createElement("div");
    newProjectEntry.id = "new-project-entry";

    // Heading for the new project
    const newProjectHeading = document.createElement("h4");
    newProjectHeading.textContent = "✨ Latest Project: Portfolio Website";

    // Description paragraph
    const newProjectPara = document.createElement("p");
    newProjectPara.textContent =
        "My fourth project is the very site you are viewing right now! " +
        "Built with HTML5, CSS3, and JavaScript, this portfolio showcases " +
        "dynamic DOM manipulation, dark-mode toggling, and form interaction. " +
        "It is an ongoing project that will grow alongside my skills as I " +
        "continue my studies at ECPI University.";

    // Assemble the entry and append it to the article
    newProjectEntry.appendChild(newProjectHeading);
    newProjectEntry.appendChild(newProjectPara);
    article.appendChild(newProjectEntry);
}
//Using querySelector()
//querySelector() targets the first <h1> on the page
const mainHeading = document.querySelector("h1");

if (mainHeading) {
    // Modify content — inject the user's name if they entered one
    if (userName && userName.trim() !== "") {
        mainHeading.textContent = "Welcome to Brittany's World, " + userName + "!";
    }
    // Modify style — change color and font size
    mainHeading.style.color = "#4f46e5";
    mainHeading.style.fontSize = "2.2em";
}
//Using getElementByID()
// getElementById() targets the section by its exact ID
const featuredSection = document.getElementById("featured-content");

if (featuredSection) {
    // Styling is handled in CSS to support both light and dark mode
    const featuredSection = document.getElementById("featured-content");
}
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
