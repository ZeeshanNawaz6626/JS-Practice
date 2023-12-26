// Non-curried function
function add(a, b) {
    return a + b;
  }
  
  // Curried function
  function curryAdd(a) {
    return function(b) {
      return a + b;
    };
  }
  
  // Usage of the curried function
  curryAdd(5)(4);

  
 