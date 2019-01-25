//Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/spinal-tap-case

function spinalCase(str) {
    let x = str.replace(/([a-z])([A-Z])/g, '$1 $2');
    console.log(x);
    
    let y = x.split(/\s|[-_]/);
    
    let newStr = y.join("-").toLowerCase().trim();
    
     return newStr;
    }
    
    spinalCase('ThisIsSpinalTap');