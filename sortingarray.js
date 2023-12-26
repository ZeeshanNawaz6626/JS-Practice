let data = [7,2,3,4,44,40,12,15,17,13]; 
console.log(data.length);
    for (i=0; i<data.length; i++)    
        {

           for (j = 0;j<data.length; j++) {
         console.log(j);

         if(data[j]>data[j+1]){ 
            let temp =data[j];
            data[j] = data[j+1];
            data[j+1] = temp;

           }
 }
        }
        console.log(data);
     