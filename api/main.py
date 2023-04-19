import os
import requests
from flask import Flask, request
from dotenv import load_dotenv
from flask_cors import CORS

load_dotenv(dotenv_path = "./.env.local")
'''
create URL & API KEY
'''
UNSPLASH_URL = "https://api.unsplash.com/photos/random"
UNSPLASH_KEY = os.environ.get("UNSPLASH_KEY", "")
DEBUG= bool(os.environ.get("DEBUG",True))#make the Debug value True to on Debug moode , if want to set Debug mode to False, please set DEBUG= in .env.local file

#if UNSPLASH_KEY is empty 
if not UNSPLASH_KEY:
    raise EnvironmentError("Please create .env.local file and insert there UNSPLASH_KEY")

app = Flask(__name__)
CORS(app)

#make Debug mode to run the program when have additional changes and not to maunally run the program in the developing stage
app.config["DEBUG"]= DEBUG



@app.route("/new-image")
def new_image():
    '''
    get the query string from user
    '''
    word = request.args.get("query")

    headers = {
        "Accept-Version":"v1",
        "Authorization":"Client-ID " + UNSPLASH_KEY
    }
    params = {
        "query":word
    }
    response = requests.get(url=UNSPLASH_URL, headers=headers, params=params)
    data = response.json()
    return data

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5050)