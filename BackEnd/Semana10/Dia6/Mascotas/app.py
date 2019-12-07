from flask import Flask
from flask_restful import Api
app = Flask(__name__)

@app.route('/')
def inicio():
    return 'La API de Veterinaria funciona correctamente 🐱'
