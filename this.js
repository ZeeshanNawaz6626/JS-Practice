// const functionName = () => {
//     const person = {
//         firstName: "John",
//         lastName: "Doe",
//         sayHello: function() {
//           console.log(this);
//         }
       
//       };
     
//   };
// const functionName = () => {
//     const person = {
//       firstName: "John",
//       lastName: "Doe",
//       sayHello: function() {
//         console.log(this);
//       }
//     };
  
//     // Create an instance of the person object
//     const johnDoe = Object.create(person);
  
//     // Call the sayHello method
//     johnDoe.sayHello();
//   };
  
//   // Call the functionName to execute the code
//   functionName();
  function functionName () {
        console.log(this);
    };

  
  // Call the functionName to execute the code
  let a = functionName;
  console.log(a());

  
  

  