const user1 = {
  name: "Will",
  score: 3,
  increment: function(){
    this.score++;
  }
}

user1.increment();
user1.increment();
user1.increment();
user1.increment();
user1.increment();
user1.increment();
user1.increment();
console.log(user1)