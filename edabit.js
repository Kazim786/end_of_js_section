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

function monthName(num) {
    let month;
  switch(num) {
        case 1:
            num === 1;
            month = "January";
            break;
        case 2: 
            num === 2;
            month = "February";
            break;
        case 3: 
            num === 3;
            month = "March";
            break;
        case 4:
            num === 4;
            month = "April";
            break;
        case 5:
            num === 5;
            month = "May";
            break;
        case 6:
            num === 6;
            month = "June";
            break;
        case 7:
            num === 7;
            month = "July";
            break;
        case 8:
            num == 8;
            month = "August";
            break;
        case 9:
            num === 9;
            month = "September";
            break;
        case 10:
            num === 10;
            month = "October";
            break;
        case 11:
            num === 11;
            month = "November";
            break;
        case 12: 
            num === 12;
            month = "December";
            break;
        default: alert("Num has to be between 1 or 12")
        
        }
        return month
  }
  
  console.log(monthName(8));
