function toggleSection(sectionId) {
    // Hide all sections first
    document.querySelectorAll('main > section').forEach(section => {
        section.classList.add('hidden');
    });

    // Show the selected section
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.classList.remove('hidden');
    }
}

function showAlphabet(letter) {
    const results = document.getElementById('results');
    let studentInfo;

    // Display specific student names based on the selected letter
    switch(letter) {
        case 'A':
            studentInfo = "Aftab, Aqsa";
            break;
        case 'B':
            studentInfo = "Bilal";
            break;
        case 'D':
            studentInfo = "Dog";
            break;
        case 'H':
            studentInfo = "Hunain, Hasir";
            break;
        case 'N':
            studentInfo = "Noor";
            break;
        case 'R':
            studentInfo = "Rehan the Great";
            break;
        case 'Z':
            studentInfo = "Zunera";
            break;
        default:
            studentInfo = "No students for this letter.";
    }

    results.innerHTML = `<h3>Students with the letter ${letter}</h3><p>${studentInfo}</p>`;
}

function handleLogin(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    alert(`Logged in with Username: ${username}`);
}

function handleContact(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    alert(`Message sent from ${name} (${email}): ${message}`);
}