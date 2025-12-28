/* Document Object Model
Implementation of Ch2 topic 2.1.1, 2.1.2 and 2.1.3 */

// DOM Element Selection - Grabbing form inputs and button elements
const Name = document.getElementById("name"); // Name input field
const roll = document.getElementById("roll"); // Roll number input field
const address = document.getElementById("address"); // Address input field
const btn_submit = document.querySelector(".btn_submit"); // Submit button
const btn_output = document.querySelector(".btn_output"); // Display output button
const transcript = document.getElementById("transcript"); // Transcript display area
const show_data = document.getElementById("show_data"); // Container for all user data

// Counter variable - Tracks the number of users stored in localStorage
let i = parseInt(localStorage.getItem("counter")) || 0;

// Save user data to localStorage (with form validation)
// Validates form inputs and stores user information as JSON in localStorage
function saveUserData() {
    // Validate Name field
    if (!Name.value) {
        alert("Name is required");
        return;
    }

    // Validate Roll Number field
    if (!roll.value) {
        alert("Roll Number is required");
        return;
    }
    // Check if roll number is a positive value
    if (roll.value<= 0) {
        alert("Roll Number must be a positive number");
        return;
    }

    // Validate Address field
    if (!address.value) {
        alert("Address is required");
        return;
    }

    alert("Form submitted successfully!");

    // Create user object with form data
    const user_object = {
        data_name: Name.value,
        data_roll: Number(roll.value),
        data_address: address.value,
    };

    // Increment counter and save user data to localStorage
    i++;
    localStorage.setItem("counter", i); // Update counter
    localStorage.setItem(`user${i}`, JSON.stringify(user_object)); // Store user as JSON string

    // Update transcript with the newly added user
    UpdateTranscript(user_object);

    // Clear form
    Name.value = "";
    roll.value = "";
    address.value = "";
}

// Display all users from localStorage
// Retrieves all stored user data and renders it in the display area
function displayAllUsers() {
    show_data.innerHTML = ""; // Clear previous content
    const totalUsers = parseInt(localStorage.getItem("counter")) || 0; // Get total number of users

    // Loop through all stored users and display them
    for (let j = 1; j <= totalUsers; j++) {
        const user_retrieve = JSON.parse(localStorage.getItem(`user${j}`));
        if (user_retrieve) ShowOutput(user_retrieve, j);
    }
}

// Update transcript section
// Displays the most recently added user in the transcript area
function UpdateTranscript(obj) {
    transcript.innerHTML = `
        <h2>Transcript</h2>
        ${description_list(obj)}
    `;
}

// Append user data
// Adds a single user's information to the display area with a unique user number
function ShowOutput(obj, j) {
    show_data.innerHTML += `
        <div class="border">
            <h2>User ${j}</h2>
            ${description_list(obj)}
        </div>
    `;
}

// Reusable description list
// Generates HTML markup for displaying user details in a definition list format
function description_list(obj) {
    return `
        <dl class="details">
            <dt>Name:</dt>
            <dd>${obj.data_name}</dd>
            <dt>Roll:</dt>
            <dd>${obj.data_roll}</dd>
            <dt>Address:</dt>
            <dd>${obj.data_address}</dd>
        </dl>
    `;
}

// Event Listeners
btn_submit.addEventListener("click", saveUserData);
btn_output.addEventListener("click", displayAllUsers);