function fibs(num){

    if(num < 2){
     return num;
    }
    else{
        return (fibs(num-1) + fibs(num-2));
    }    
}
