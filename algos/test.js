// ADD CODE HERE
const forEach = (array,callback) => {
    // iterate through our array with a for loop
    for(let i = 0; i < array.length; i++){
    // invoke callback function, passing in current array element
      callback(array[i])
    }
  }
  

  const map = (array, call) => {
    // initialize a new array
    const result = [];
    // call forEach witht he passed in array and a new function that will take an array element
    forEach(array,function(element){
        result.push(call(element))
    })

    return result;
  };
  // Uncomment these to check your work!
  console.log(typeof forEach); // should log: 'function'
  forEach(['a','b','c'], i => console.log(i)); // should log: 'a', 'b', 'c'
  console.log(typeof map); // should log: 'function'
  console.log(map([3,4,5], n => n - 2)); // should log: [1, 2, 3]