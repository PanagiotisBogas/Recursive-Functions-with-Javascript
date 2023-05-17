function productOfArray(array){
    if(array.length === 0) return 1;
    return array.pop() * productOfArray(array);
  }
  
   console.log(productOfArray([1,2,5])) //10