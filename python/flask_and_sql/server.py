from flask_app import app
from flask import render_template, request, redirect
from flask_app.controllers import friend_controller

if __name__ == "__main__":
    app.run(debug=True)

