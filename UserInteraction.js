/* Dark Mode Toggle:
classList.toggle("dark-mode") on <body>:
    Adds "dark-mode" if it isn't there -> dark theme
    Removes "dark-mode" if it is there -> light theme */
//Dark Mode checkbox
// Dark Mode Toggle
const darkModeToggle = document.getElementById("dark-mode-toggle");
// Check localStorage when page loads
const darkModeEnabled = localStorage.getItem("darkMode");
if (darkModeEnabled === "true") {
    document.body.classList.add("dark-mode");
    darkModeToggle.textContent = "☀️";
} else {
    darkModeToggle.textContent = "🌙";
}
// Listen for button click
darkModeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    // Save preference
    const isDarkMode = document.body.classList.contains("dark-mode");
    localStorage.setItem("darkMode", isDarkMode);
    // Update icon
    if (isDarkMode) {
        darkModeToggle.textContent = "☀️";
    } else {
        darkModeToggle.textContent = "🌙";
    }
});
// Welcome Modal
let userName = "";

const modalOverlay   = document.getElementById("welcome-modal-overlay");
const modalCloseBtn  = document.getElementById("modal-close-btn");
const modalNameInput = document.getElementById("modal-name-input");

function closeModal() {
    // Grab whatever name the user typed (may be empty)
    userName = modalNameInput.value.trim();

    // Pre-fill the contact form's Name field if a name was given
    const contactName = document.getElementById("name");
    if (contactName && userName !== "") {
        contactName.value = userName;
    }

    // Update the page heading with their name (same logic as before)
    const mainHeading = document.querySelector("h1");
    if (mainHeading && userName !== "") {
        mainHeading.textContent = "Welcome to Brittany's World, " + userName + "!";
    }

    // Hide the modal
    modalOverlay.style.display = "none";
}
// Close when the button is clicked
modalCloseBtn.addEventListener("click", closeModal);
// Also close if the user presses Enter in the name field
modalNameInput.addEventListener("keydown", function(e) {
    if (e.key === "Enter") closeModal();
});
// Project Objects
const project1 = {
    title: "Rolodex Contact List",
    summary: "A Java application that allows users to create, store, and manage contact information using a digital Rolodex system.",
    imageUrl: "https://via.placeholder.com/150",
    repository: "https://github.com/Gr33nFariry/SDC330L_v2.git"
};

const project2 = {
    title: "Digital Library",
    summary: "A bookstore management application that allows customers to rent books, purchase books, and leave reviews.",
    imageUrl: "https://via.placeholder.com/150",
    repository: "https://github.com/Gr33nFariry/SDC330L.git"
};

const project3 = {
    title: "Calculator Brain",
    summary: "A Java calculator that performs calculations and stores previous user inputs and results for future reference.",
    imageUrl: "https://opengraph.githubassets.com/1/Gr33nFariry/SDC230L",
    repository: "https://github.com/Gr33nFariry/SDC230L"
};
// Array of Project Objects
const projects = [
    project1,
    project2,
    project3
];
// Select the project section
const projectsContainer = document.getElementById("projects-container");

// Loop through the array and create elements
projects.forEach(function(project) {

    // Project card container
    const projectCard = document.createElement("div");
    projectCard.classList.add("project-card");

    // Project title
    const title = document.createElement("h4");
    title.textContent = project.title;

    // Project summary
    const summary = document.createElement("p");
    summary.textContent = project.summary;

    // Project image
    const image = document.createElement("img");
    image.src = project.imageUrl;
    image.alt = project.title;
    image.width = 200;

    // Repository link
    const link = document.createElement("a");
    link.href = project.repository;
    link.textContent = "View Repository";
    link.target = "_blank";

    // Add elements to the card
    projectCard.appendChild(title);
    projectCard.appendChild(image);
    projectCard.appendChild(summary);
    projectCard.appendChild(link);

    // Add card to page
    projectsContainer.appendChild(projectCard);
});
// Check if project data already exists
let storedProjects = sessionStorage.getItem("projects");

if (storedProjects === null) {
    // No data exists yet

    // Convert the projects array into a JSON string
    const projectsString = JSON.stringify(projects);

    // Store it in sessionStorage
    sessionStorage.setItem("projects", projectsString);

    console.log("Project data stored in sessionStorage.");
} else {
    // Data exists

    // Convert the JSON string back into a JavaScript array
    const parsedProjects = JSON.parse(storedProjects);

    console.log("Project data retrieved from sessionStorage:");
    console.log(parsedProjects);
}
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

