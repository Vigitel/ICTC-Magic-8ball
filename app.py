from flask import Flask, render_template, jsonify, request
import random, time
import flaskwebgui

app = Flask(__name__)
gui = flaskwebgui.FlaskUI(app)

responses = [
    "Yes for sure!", "It is clear", "No doubt!", "All signs say yes", 
    "Ask again", "Try once more", "Look deep within you", 
    "No way to say", "Not at all", "Do not bet on it", "The stars say no"
]

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/get-answer', methods=['POST'])  # Change to POST
def get_answer():
    data = request.get_json()  # Get JSON data from request
    question = data.get('question','')  # Extract question

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
    #gui.run()