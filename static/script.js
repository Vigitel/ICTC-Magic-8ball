/*
function getAnswer() {
    fetch('/get-answer')
        .then(response => response.json())
        .then(data => {
            document.getElementById('response').innerText = data.answer;
        });
}
*/


/*
function getAnswer() {
    const question = document.getElementById('question').value;  // Get input value

    fetch('/get-answer', {
        method: 'POST',  // Send a POST request
        headers: {
            'Content-Type': 'application/json'  // Tell Flask we're sending JSON
        },
        body: JSON.stringify({ question: question })  // Convert to JSON format
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('response').innerText = data.answer;  // Update response text
    });
    
}
    */


function getAnswer() {
    const questionInput = document.getElementById('question');
    const submitButton = document.querySelector('button'); // Select the button

    const question = questionInput.value.trim();  // Trim whitespace

    if (!question) return;  // Stop if input is empty

    // Disable input and button to prevent spam
    questionInput.disabled = true;
    submitButton.disabled = true;

    fetch('/get-answer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: question })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('response').innerText = data.answer;
    })
    .finally(() => {
        // Re-enable input and button after response is received
        questionInput.disabled = false;
        submitButton.disabled = false;
        questionInput.value = "";  // Clear input field
        questionInput.focus();  // Refocus input for the next question
    });
}

