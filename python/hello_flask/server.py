from flask import Flask, render_template # Import Flask to allow us to create our app
app = Flask(__name__)    # Create a new instance of the Flask class called "app"

@app.route('/')          # The "@" decorator associates this route with the function immediately following
def hello_world():
    return render_template('index.html', phrase = "hello", times=5)  # Return the string 'Hello World!' as a response

@app.route('/success')
def success():
    return "success"

@app.route('/hello/<name>/<int:num>')
def hello(name,num):
    return f"Hello, {name * num}"

if __name__=="__main__":   # Ensure this file is being run directly and not from a different module    
    app.run(debug=True)