const newYearNewMe = () => {
    const arr = [];

    const addArray = (s) => {
        arr.push(s)
        return arr
    }
    
    return addArray
  };

// UNCOMMENT THE LINES BELOW TO TEST YOUR WORK
const myResolutions = newYearNewMe();
const yourResolutions = newYearNewMe();

console.log(myResolutions('Practice coding every day 💻'));
// // should log ['Practice coding every day 💻']
console.log(myResolutions('Build my first web app ⌨️'));
// // should log ['Practice coding every day 💻', 'Build my first web app ⌨️']
// console.log(myResolutions('<My personal resolution!>'));
// // should log ['Practice coding every day 💻', 'Build my first web app ⌨️', '<My personal resolution!>']

// console.log(yourResolutions('Finish CSX ✅'));
// // should log ['Finish CSX ✅']
// console.log(yourResolutions('Attend JavaScript the Hard Parts for every topic 🗓️'));
// // should log ['Finish CSX ✅', 'Attend JavaScript the Hard Parts for every topic 🗓️']
