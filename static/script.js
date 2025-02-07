/*
function getAnswer() {
    fetch('/get-answer')
        .then(response => response.json())
        .then(data => {
            document.getElementById('response').innerText = data.answer;
        });
}
*/

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
