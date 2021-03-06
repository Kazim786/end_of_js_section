// // //Codewars.com's exercise 

// // //make a function that sorts any given number in descending order



//*******WORKING CODE  */:

const maskify = (info) => {
    let fourSaved = info.slice(-4) // put a negative number within the parameters so it starts from backwards. This variable will save the last 4 characters of the string.
    const infoArr = info.split(", ") //turned string into an array for easier manipulation
  
    for(let i = 0; i < infoArr.length; i++){
    
      infoArr[i] = infoArr[i].replace(/[a-zA-Z0-9]/g, "#") //so each and every element in the array is changed into a #
      // infoArr[i] = infoArr[i].replace(/[0-9]/g, "#")
    }
    let arrStr = infoArr.join(''); //Changing array back to string
    let masked = arrStr.slice(0, -4) + fourSaved; // putting the last 4 characters of the string back into it.
    return masked 
  }
  console.log(maskify("hello world")) //desired output should be: ##### #orld
  console.log(maskify("Kazim"))
  console.log(maskify("345567889"))
  console.log(maskify("34594532"))
  console.log(maskify("as3dfsdf45f"))

  //***********  Previous Attempts below *********


// // function descendingOrder(n){
// //     //...
  
// //     return parseInt(String(n).split('').sort().reverse().join(''))
// //     // String() function converts the value of an object to a string.
// //     //split method turns string into an array
// //     //sort and reverse are array methods that sort in ascending order and then reverses it so its in descending order
// //     //join turns array back into string
// //   }
// //   console.log(descendingOrder(234412));

// //   //output: 443221

// //Exercise 2 - Find duplicate string

// //ignoreCase() => so it doesnt worry about the upper or lowercase
// // function duplicateCount(str){
// //     //...
// //     let count = 0;
// //     for(let i = 0; i < str.length; i++){
// //       if(str[i] === str[i + 1]){
// //       count = count + 1 //Count will tally how many times each given letter is repeated
// //        return console.log(`${str[i]} occurs ${count}`)
// //       } else {
// //         return console.log('No return')
// //       }
      
// //     }
// //   }

// // //trying nested loops
// // function duplicateCount(str) {
// //     let result = {}
// //     for(let i = 0; i < str.length; i++) {
// //        const char = str[i]
// //        if(char in result) {
// //             result[char] +=1
// //        } else {
// //             result[char] = 1
// //        }
// //     }
// //     return result
// //   }
  
// //   console.table(duplicateCount('blaaaab'));
  
//   // duplicateCount("AbCdeeF")
  
//   // var example = 'hello';
  
//   // var charRepeats = function(str) {
//   //     for (var i=0; i<str.length; i++) {
//   //       if ( str.indexOf(str[i]) !== str.lastIndexOf(str[i]) ) {
//   //         return false; // repeats
//   //       }
//   //     }
//   //   return true;
//   // }
  
//   // let ex2 = 'bye'
//   // console.log(charRepeats(ex2))
  
//   // console.log( charRepeats(example) ); // 'false', because when it hits 'l', the indexOf and lastIndexOf are not the same.

//   //************************************************ */
// //Exercise 3

// // Usually when you buy something, 
// // you're asked whether your credit card number, 
// // phone number or answer to your most secret question is still 
// // correct. However, since someone could look over your shoulder, 
// // you don't want that shown on your screen. Instead, we mask it.

// // Your task is to write a function maskify, 
// // which changes all but the last four characters into '#'.

// //everything but the last 4 need to be hidden
// //need to do something that singles out the last 4 of anything that is put into the argument.
// const maskify = (info) => {
//     console.log(info.substr(-4)) //might have to put a negative number within the parameters so it starts from backwards
// }
// //this pulls out the last 4 
// //did it by myself
// //Slice (last 4) = save to variable fourSaved
// // Slice (entire string) = replace with #### = save to var replaced  
// // Replace last 4 within var replaced with fourSaved -> (e.replace(e.substr(-4), "####"


// //Now have to find a way to exclude the last 4 from being masked by the ### 

// //would this work console.log(e.replace(e.substr(-4), ####)) (keep in mind i dont want 
// //to replace the last 4 with the ## as 
// //im doing in this code. This is simply done to see if this method works)
// //console.log(e.replace(e.substr(-4), "####")  <<<<< this works. You just have to put quotation marks around the string. 
// //This particular code replaces the last 4 with the ####. 
// //Our goal is to do the opposite. Everything but the last 4
// //This replace method will be used in the way that i wrote it

// //console.log(e.substr([5 -4])) < might have to do something like this with substr
// //might also have to use slice method

// //Slice (last 4) = save to variable fourSaved
// // Slice (entire string) = replace with #### = save to var replaced  
// // Replace last 4 within var replaced with fourSaved

// // Followed notes and got this

// const maskify = (info) => {
//     // let hash = '#' * info.length; //need to find a way to have as many # as there are characters in the string.
//     let fourSaved = info.slice((info.substr(-4))) //might have to put a negative number within the parameters so it starts from backwards
//     // info.replace(info.slice(0), hash) //Might be a good idea to use length method to know how much ## you need
//     for(let i = 0; i < info.length; i++){
//         let newInfo = info.replace(info[i], "#")
//     }
//     return info.replace(info.substr(-4), fourSaved);
// }
// //make an array maybe for the hash and then push the hash into the array then set it = to info.length
// //make a for loop with this inside : Replace(str[i], “#”)

// const maskify = (info) => {
//     // let hash = '#' * info.length; //need to find a way to have as many # as there are characters in the string.
//     let fourSaved = info.slice((info.substr(-4))) //might have to put a negative number within the parameters so it starts from backwards
//     // info.replace(info.slice(0), hash) //Might be a good idea to use length method to know how much ## you need
//     for(let i = 0; i < info.length; i++){
//         let newInfo =+ info.replace(info[i], "#")
//         console.log(newInfo);
    
//     return newInfo.replace(info.substr(-4), fourSaved);
//   }
//   }
//   console.log(maskify("hello world"))
// //***************************************** */

//   ///LATEST CODE TURNED STRING TO AN ARRAY:

//   const maskify = (info) => {
//   let fourSaved = info.slice((info.substr(-4))) //might have to put a negative number within the parameters so it starts from backwards
//   // info.replace(info.slice(0), hash) //Might be a good idea to use length method to know how much ## you need
// const infoArr = info.split(", ")


//   for(let i = 0; i < infoArr; i++){
//       infoArr[i] = "#"
//      console.log(infoArr.join(''));
  
//   }
//   let arrStr = infoArr.join('');
//   let masked = arrStr.replace(arrStr.substr(-4), fourSaved);
//   return masked
// }
// console.log(maskify("hello world"))

