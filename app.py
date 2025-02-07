from flask import Flask, render_template, jsonify, request
import random

app = Flask(__name__)

responses = [
    "Yes, definitely!", "No, absolutely not.", "Ask again later.", 
    "Most likely.", "Very doubtful.", "It is certain.", 
    "Better not tell you now.", "Concentrate and ask again."
]

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/get-answer', methods=['POST'])  # Change to POST
def get_answer():
    data = request.get_json()  # Get JSON data from request
    question = data.get('question')  # Extract question

    print(f"User asked: {question}")  # Log for debugging

    response = random.choice(responses)  # Pick a random answer
    return jsonify({"question": question, "answer": response})  # Return both

'''
@app.route('/get-answer', methods=['GET'])
def get_answer():
    return jsonify({"answer": random.choice(responses)})
'''

if __name__ == '__main__':
    app.run(debug=True)