//Codewars.com's exercise 

//make a function that sorts any given number in descending order

function descendingOrder(n){
    //...
  
    return parseInt(String(n).split('').sort().reverse().join(''))
    // String() function converts the value of an object to a string.
    //split method turns string into an array
    //sort and reverse are array methods that sort in ascending order and then reverses it so its in descending order
    //join turns array back into string
  }
  console.log(descendingOrder(234412));

  //output: 443221
  