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
