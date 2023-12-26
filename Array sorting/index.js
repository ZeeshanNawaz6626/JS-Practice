
function Distance(arr, item1, item2) {
    let index1 = arr.indexOf(item1);
    let index2 = arr.indexOf(item2);
    let distance = index2 - index1 ;
    return distance;
    }
 const arr = [9, 66, 14, 13, 5, 9, 4, 0, 7, 1];
 console.log("The distance between two items:");
 console.log(Distance(arr, 9, 5));