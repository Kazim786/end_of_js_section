// //Codewars.com's exercise 

// //make a function that sorts any given number in descending order

// function descendingOrder(n){
//     //...
  
//     return parseInt(String(n).split('').sort().reverse().join(''))
//     // String() function converts the value of an object to a string.
//     //split method turns string into an array
//     //sort and reverse are array methods that sort in ascending order and then reverses it so its in descending order
//     //join turns array back into string
//   }
//   console.log(descendingOrder(234412));

//   //output: 443221

//Exercise 2 - Find duplicate string

//ignoreCase() => so it doesnt worry about the upper or lowercase
function duplicateCount(str){
    //...
    let count = 0;
    for(let i = 0; i < str.length; i++){
      if(str[i] === str[i + 1]){
      count = count + 1 //Count will tally how many times each given letter is repeated
       return console.log(`${str[i]} occurs ${count}`)
      } else {
        return console.log('No return')
      }
      
    }
  }
  
  // duplicateCount('bbe'); //so far function tests code to see if it has a repeated number right after it.
  duplicateCount('bba');
  
  
  
  // duplicateCount("AbCdeeF")
  
  // var example = 'hello';
  
  // var charRepeats = function(str) {
  //     for (var i=0; i<str.length; i++) {
  //       if ( str.indexOf(str[i]) !== str.lastIndexOf(str[i]) ) {
  //         return false; // repeats
  //       }
  //     }
  //   return true;
  // }
  
  // let ex2 = 'bye'
  // console.log(charRepeats(ex2))
  
  // console.log( charRepeats(example) ); // 'false', because when it hits 'l', the indexOf and lastIndexOf are not the same.
  