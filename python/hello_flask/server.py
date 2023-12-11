from flask import Flask, render_template,request,redirect,session  # Import Flask to allow us to create our app
app = Flask(__name__)   
app.secret_key = 'shhhhh'

@app.route('/')          # The "@" decorator associates this route with the function immediately following
def hello_world():
    return render_template('index.html')

@app.route('/show')
def show():
    return render_template('index.html',user = session["username"],email=session["email"])

@app.route('/users', methods=['POST'])
def create_user():
    print("Got Post Info")
    session["username"] = request.form['name'];
    session["email"] = request.form['email'];
    return redirect('/show')

if __name__=="__main__":   # Ensure this file is being run directly and not from a different module    
    app.run(debug=True)    # Run the app in debug mode.