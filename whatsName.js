//Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/wherefore-art-thou

function whatIsInAName(collection, source) {
    // What's in a name?
    var arr = [];
    // Only change code below this line
          let keys = Object.keys(source);
          return collection.filter(function(obj){
              for (let key of keys) {
                  if(!obj.hasOwnProperty(key) || obj[key] !== source[key]){ return false;
                  }
              } 
              return true;
          });
    // Only change code above this line
   
  }
  
  whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
  