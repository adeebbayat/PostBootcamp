// ADD CODE HERE
const groupBy = (array, callback) => {
  const new_obj = {}
  array.forEach((element)=>{
    if(new_obj[callback(element)]){
    let values = Object.values(new_obj[callback(element)])
    values.push(element)
    new_obj[callback(element)] = values}
    else{
      new_obj[callback(element)] = [element]
    }
  })
  return new_obj
}
// Uncomment these to check your work!
const decimals = [1.3, 2.1, 2.4];
const floored = function(num) { return Math.floor(num); };
console.log(groupBy(decimals, floored)); // should log: { 1: [1.3], 2: [2.1, 2.4] }
