from flask import Flask
app = Flask(__name__)

@app.route('/')
def inicio():
    return 'La API de Veterinaria funciona correctamente 🐱'

