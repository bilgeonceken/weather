import requests
from flask import Flask, render_template
from flask_cors import CORS

app = Flask(__name__, template_folder='public', static_folder='public')
CORS(app)
@app.route("/")
def home():
    return render_template('index.html')

@app.route("/getData")
def get_data():
    url = 'https://samples.openweathermap.org/data/2.5/forecast?q=M%C3%BCnchen,DE&appid=b6907d289e10d714a6e88b30761fae22'
    return requests.get(url).json()
