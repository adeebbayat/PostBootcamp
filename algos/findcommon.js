let array1 = [1,2,3,4,5]
let array2 = [1,3,5,7,9]
let array3 = [1,5,9,13,17]
let combinedArray = [array1,array2,array3]

function findCommonElements(arrays) {
  if (arrays.length === 0) {
    return []; // If there are no arrays, there are no common elements
  }

  // Use the first array as a reference
  const referenceArray = arrays[0];

  // Filter elements that are present in all arrays
  const commonElements = referenceArray.filter((element) =>
    arrays.every((array) => array.includes(element))
  );

  return commonElements;
}

console.log(findCommonElements(combinedArray))