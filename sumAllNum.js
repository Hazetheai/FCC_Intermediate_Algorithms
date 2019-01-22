// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them.

function sumAll(arr) {
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    let newArr =[];
    for(let i=min; i<=max; i++) {
      newArr.push(i);
    }
  
  
    return newArr.reduce((acc, val) => acc + val);
  }
  
  sumAll([1, 4]);