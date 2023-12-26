// Create a function which returns true and false
//  by checking if the given value is even

function isEven(value) {
    if (typeof value !== 'number') {
      return false; 
    }
    
    return value % 2 === 0;
  }
  
 
  console.log(isEven(4));     
  console.log(isEven(7));     
  console.log(isEven('abc')); 

//   The use currying function to return opposite 
//   case(i.e odd number checker

function isOdd(number) {
    return number % 2 !== 0;
  }
  
  function curriedIsOdd(number) {
    if (typeof number !== 'number') {
      return false; 
    }
  
    return function () {
      return isOdd(number);
    };
  }
  
  
  const checkOdd = curriedIsOdd(5);
  console.log(checkOdd());
  
  