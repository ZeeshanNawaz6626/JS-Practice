// q=19;
// console.log(q)
//  var q;
// // output 19

// console.log(a)
// var b =19;
//  Output Not define 
// function fun(){
//  console.log(a)
// }
// const/var/const a = 16;
// fun()
// output 16
// function fun(){
//     console.log(a)
//    }
//    fun()
//    var a = 16;
//    out put undefined
// // function fun(){
// //     function c ()
// //     { 
// //     console.log(a)
// // } 
// // console.log(a)
// //    }
// //    var a = 16;
// //    fun()
// //    c()
// //    output 16 
// //    we can not declare child  funtion outer of parent
  
//    function fun(){
//     function c ()
//     { 
//     console.log(a)
// } 
// c()
// console.log(a)
//    }
//    var a = 16;
//    fun()
//    output 
//    16
//    16
  
// var a = 10
// var func = function (){
// var b = 20;
//     console.log("a and b is accessible (outer):", a, b);
//     var innerFunc= function (){
//         var c = 30;
//         console.log("a and b and c is accessible (inner):", a, b, c);
//     }
//     innerFunc();
//     return;
// }
// func();
// console.log("only a is accessible (global):", a);
// var a =19;
// var a = 20;
// console.log(a)
var a;
if(a){
    console.log(a)
}
else{
    console.log(b)
}