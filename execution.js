// var a=10;
// let b=11;
// console.log(a)
// console.log(b)
// function fun(){
//     var c=13;
//     let d=14;
//     console.log(c)
//     console.log(d)
// }
// fun();
let a=15;
function square(num) {
    return num*num;
     
 }
 function displaysquare(fn) {
    let a=10;
     console.log("square is" + fn(5))
 }
 displaysquare(square);