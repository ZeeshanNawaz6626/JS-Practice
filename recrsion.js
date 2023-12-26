let counter=1; 
function fun(num){
    if(counter>num){
        return;
    }
    console.log("hello")
    counter++;
    fun(num);
}
fun(10);
