from flask_app import app
from flask import render_template,redirect,request,session,flash
from flask_app.models.friend import Friend

# READ ALL
@app.route('/')
def index():
    # calling the get_all method from the friends.py
    all_friends=Friend.get_all()
    # passing all friends to our template so we can display them there
    return render_template("index.html",friends=all_friends)

# READ ONE
@app.route('/friend/show/<int:friend_id>')
def show(friend_id):
    # calling the get_one method and supplying it with the id of the friend we want to get
    friend=Friend.get_one(friend_id)
    return render_template("show_friend.html",friend=friend)

# CREATE
@app.route("/create_friend",methods = ["POST"])
def create_friend():

    data = {
        "fname": request.form["fname"],
        "lname": request.form["lname"],
        "occ": request.form["occ"]
    }

    Friend.save(data)

    return redirect("/")

# UPDATE
@app.route('/friends/update',methods=['POST'])
def update():
    Friend.update(request.form)
    return redirect('/')

# DELETE
@app.route('/friends/delete/<int:friend_id>')
def delete(friend_id):
    Friend.delete(friend_id)
    return redirect('/')
