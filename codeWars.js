//Codewars.com's exercise 

//make a function that sorts any given number in descending order

function descendingOrder(n){
    //...
  
    return parseInt(String(n).split('').sort().reverse().join(''))
    // String() function converts the value of an object to a string.
    
  }
  console.log(descendingOrder(234412));

  //output: 443221
  