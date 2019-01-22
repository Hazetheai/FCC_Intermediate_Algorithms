// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

function diffArray(arr1, arr2) {

  const newArr1 = arr1.filter(el => {
    if(arr2.indexOf(el) == -1 ) {
      return true
      } else return false;
  })
  
  const newArr2 = arr2.filter(el => {
    if(arr1.indexOf(el) == -1 ) {
      return true
      } else return false;
  })

  return newArr1.concat(newArr2);
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

