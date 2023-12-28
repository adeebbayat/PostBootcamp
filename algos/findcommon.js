let array1 = [1,2,3,4,5]
let array2 = [1,3,5,7,9]
let array3 = [1,5,9,13,17]
let combinedArray = [array1,array2,array3]

function findCommon(array){
  const my_set = new Set();
  array.forEach((interiorArray) => {
    interiorArray.forEach((element) => {
        my_set.add(element)
    })
  })
  return my_set
}

console.log(findCommon(combinedArray))