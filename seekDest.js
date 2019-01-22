// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

function destroyer(arr) {
    const array = [...arguments].splice(0,1);
    const seekArr = [...arguments].slice(1);
    console.log(seekArr);
  
    return arr.filter(el => {
      if(seekArr.indexOf(el) != -1) {
        return false
        } else return true
    });
  }
  
  destroyer([1, 2, 3, 1, 2, 3], 2, 3);