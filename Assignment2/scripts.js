const Name = document.getElementById("name");
const roll = document.getElementById("roll");
const address = document.getElementById("address");
const form = document.getElementById("entryform");
const transcript = document.querySelector(".transcript");
const notes = document.querySelector(".notes");
const loadBtn = document.getElementById("load_data");

let counter = parseInt(localStorage.getItem('counter')) || 0;

// Generate HTML for a user object
function description_list(obj) {
    return `
        <dl class="details">
            <dt>Name:</dt><dd>${obj.data_name}</dd>
            <dt>Roll:</dt><dd>${obj.data_roll}</dd>
            <dt>Address:</dt><dd>${obj.data_address}</dd>
        </dl>
    `;
}

// Update transcript with latest user
function UpdateTranscript(obj) {
    transcript.innerHTML = `
        <h2>Transcript</h2>
        ${description_list(obj)}
    `;
}

// Show user in notes section
function ShowOutput(obj, j) {
    notes.innerHTML += `
        <div class="border" >
            <h2>User${j}</h2>
            ${description_list(obj)}
        </div>
    `;
}

// Handle form submission
form.addEventListener("submit", function(event) {
    event.preventDefault();
    if(Name.value.trim() === "" || roll.value.trim() === "" || address.value.trim() === "") {
        alert("All fields are required");
        return;
    }

    if(Number(roll.value) < 0) {
        alert("Roll number must be positive");
        return;
    }

    counter++;
    localStorage.setItem('counter', counter);

    const user_object = {
        data_name: Name.value,
        data_roll: Number(roll.value),
        data_address: address.value
    };

    localStorage.setItem(`user${counter}`, JSON.stringify(user_object));

    UpdateTranscript(user_object);

    form.reset();
});

// Load previously saved users only on button click
loadBtn.addEventListener("click", function() {
    notes.innerHTML = ""; // Clear notes before loading
    for(let j = 1; j <= counter; j++) {
        const user_retrieve = JSON.parse(localStorage.getItem(`user${j}`));
        if(user_retrieve) {
            ShowOutput(user_retrieve, j);
        }
    }
});