// // Write a function that returns true if there exists at least one number that is larger than or equal to n.

// // Examples
// // existsHigher([5, 3, 15, 22, 4], 10) ➞ true

// // existsHigher([1, 2, 3, 4, 5], 8) ➞ false

// // existsHigher([4, 3, 3, 3, 2, 2, 2], 4) ➞ true

// // existsHigher([], 5) ➞ false
// // Notes
// // Return false for an empty array [].


// function existsHigher(arr, n) {
// 	if(arr !== []){
// 		for(let i = 0; i < arr.length; i++){
// 			if(n < arr[i] || n === arr[i]){
//                 return true
//             }
//             else if(n > arr[i] && arr === []){
//         return false
    
// }
// 		}
// 	}
// }

//i isnt incrementing and the empty array is not returning false

//checked again and i seems to be working now. The else if is returning undefined

//****************** */

//Exercise 2. Count how many times True occurs in an array:

function countTrue(arr) {
	if(arr === []){
		return 0
	}
	const count = [];
	for(let i = 0; i < arr.length; i++){
		if(arr[i] === true){
			count.push(arr[i]);
		}
	}
	return count.length
	 
}
//********** */
//Exercise 3 - how many words are there in a string:

// function countWords(str) {
//     const arrStr = str.split(" ")
    
//       return (arrStr.length)
//   }

//************* */

//Exercise 4:

// Create a function that takes a number (from 1 to 12) 
// and returns its corresponding month name as a string. For example, if you're given 3 as input, 
// your function should return "March", 
// because March is the 3rd month.

// function monthName(num) {
//     let month;
//   switch(num) {
//         case 1:
//             num === 1;
//             month = "January";
//             break;
//         case 2: 
//             num === 2;
//             month = "February";
//             break;
//         case 3: 
//             num === 3;
//             month = "March";
//             break;
//         case 4:
//             num === 4;
//             month = "April";
//             break;
//         case 5:
//             num === 5;
//             month = "May";
//             break;
//         case 6:
//             num === 6;
//             month = "June";
//             break;
//         case 7:
//             num === 7;
//             month = "July";
//             break;
//         case 8:
//             num == 8;
//             month = "August";
//             break;
//         case 9:
//             num === 9;
//             month = "September";
//             break;
//         case 10:
//             num === 10;
//             month = "October";
//             break;
//         case 11:
//             num === 11;
//             month = "November";
//             break;
//         case 12: 
//             num === 12;
//             month = "December";
//             break;
//         default: alert("Num has to be between 1 or 12")
        
//         }
//         return month
//   }
  
//   console.log(monthName(8));

//******************************* */
//Exercise 5

// A number added with its additive inverse equals zero. 
//Create a function that returns an array of additive inverses.

// Examples
// additiveInverse([5, -7, 8, 3]) ➞ [-5, 7, -8, -3]

// additiveInverse([1, 1, 1, 1, 1]) ➞ [-1, -1, -1, -1, -1]

// additiveInverse([-5, -25, 35]) ➞ [5, 25, -35]
// Notes
// Don't forget to return the result.
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions in the Solutions tab.

// const additiveInverse = (arr) => {
//     const additive = [];
//     for(let i = 0; i < arr.length; i++){
//         if(Math.sign(arr[i]) === 1 ){
//             additive.push(-arr[i])
//         }
//         else if(Math.sign(arr[i]) === -1){
//             additive.push(-arr[i])
//         }
//     }
// return additive;
// }

//********************** */
//Exercise 6


// Create a function that counts how many
// characters make up a rectangular shape. 
//You will be given a array of strings.

// Examples
// countCharacters([
//   "###",
//   "###",
//   "###"
// ]) ➞ 9

// countCharacters([
//   "22222222",
//   "22222222",
// ]) ➞ 16

// countCharacters([
//   "------------------"
// ]) ➞ 18

// countCharacters([]) ➞ 0

// countCharacters([ "", ""]) ➞ 0
// Notes
// Return 0 if given an empty array.

//My notes before building:

// arr.length === 0 for the conditional that evaluates empty array


// const theTwos = [
//     '22222222',
//     '22222222',
//     ]
// const countCharacters = (array) => {
//     if(array.length === 0){
//         return 0
//     }
//     else{
//         for(let i = 0; i < array.length; i++){
//             if(array.length === 1 ){
//             return array[0].slice().length
//             }
//             else if(array.length > 1){
//             return array[i].slice().length * array.length //Gotta figure out how to add all the elements 
//                 }
//         }
//     }
//   }
//   console.log(countCharacters(theTwos))
//It worked!!! WOOHOO DID IT ALL BY MYSELF WITH 0 HELP

//************* */

//Exercise 6 Odd Up, Even Down

// Create a function that goes through 
// the array, incrementing (+1) for each 
// odd number and decrementing (-1) for each even number.

// Examples
// transform([1, 2, 3, 4, 5]) ➞ [2, 1, 4, 3, 6]

// transform([3, 3, 4, 3]) ➞ [4, 4, 3, 4]

// transform([2, 2, 0, 8, 10]) ➞ [1, 1, -1, 7, 9]


// Notes --> Will use modular

//for loop
//if(array[i] % 2 === 0){
    //return array[i] += 1
//}
//else if( array[i] % 2 !== 0 || array[i] % 2 === 1 ){
    // array[i] -= 1
//}

//final code


// const transform = (array) => {
//     for(let i = 0; i < array.length; i++){
//         if(array[i] % 2 === 0){
//             array[i] -= 1
//         }
//         else if(array[i] % 2 === 1 ){
//            array[i] += 1
//         }
//       }
//       return array
//   }


//***************** */
//Exercise 7 Missing Third Angle:

// You are given 2 out of 3 angles in a triangle, in degrees.

// Write a function that classifies the missing 
//angle as either "acute", "right", or "obtuse" based on its degrees.

// An acute angle is less than 90 degrees.
// A right angle is exactly 90 degrees.
// An obtuse angle is greater than 90 degrees (but less than 180 degrees).
// For example: missingAngle(11, 20) should return "obtuse", since the missing angle would be 149 degrees, which makes it obtuse.

// Examples
// missingAngle(27, 59) ➞ "obtuse"

// missingAngle(135, 11) ➞ "acute"

// missingAngle(45, 45) ➞ "right"
// Notes
// The sum of angles of any triangle is always 180 degrees.

//My notes:
//a + b - 180 === c
//if (c === 90){
// return console.log( "Right angle")
//} else if( c < 90){
    //return console.log("Acute angle")
//} else if (c > 90){
    //return console.log("Obtuse angle")
//}

//Code:
// const missingAngle = (a, b) => {
//     let missing = 180 - (a + b) 
//       let right = "Right Angle"
//       let obtuse = "Obtuse"
//       let acute = "Acute Angle"
//     if (missing === 90){
//    return right 
//   } else if (missing < 90){
//      return  acute
//   } else if (missing > 90){
//      return obtuse
//   }
//   else {
//     return console.log("Sum of angles go up to 180.")
//   } }
  
//   console.log(missingAngle(5, 7)) //Obtuse
//   console.log(missingAngle(45, 45)) //Right
//   console.log(missingAngle(100, 2)) //Acute

//*************** */
//Exercise 8

// Write a regular expression that matches 
//a string if it contains at least one digit.

// Examples
// "c8" ➞ true

// "23cc4" ➞ true

// "abwekz" ➞ false

// "sdfkxi" ➞ false
// Notes
// This challenge is designed to use RegEx only.

//My notes: Use RegEx (wrote this before noticing the note above^^^ lol)

let x = /\d/g

/* Fill in the regular expression */








