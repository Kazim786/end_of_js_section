//Exercise 1
// Add Two Numbers
// Difficulty: Medium


// You are given two non-empty linked lists 
//representing two non-negative integers. 
//The digits are stored in reverse order 
//and each of their nodes contain a single digit. 
//Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example:

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.


//DONE :D
// var addTwoNumbers = function(l1, l2) {
//     //turn arrays into strings first and then join them then turn to numbers
//       l1 = l1.reverse()
//       l2 = l2.reverse()
//       l1 = l1.join("")
//       l2 = l2.join("")
//       l1 = Number(l1)
//       l2 = Number(l2)
      
//       let sum = l1 + l2;
//       const sumArr = []
//       sum = sum.toString()
//       sum = sum.split("")
//       sumArr.push(sum)
      
    
//         console.log(sum)
//         return sumArr
//   };
  
//********************** */
//EXERCISE 3

// Longest Substring Without Repeating Characters
//Given a string, find the length
// of the longest substring without repeating characters.

//Example 1:

// Input: "abcabcbb"
// Output: 3 
// Explanation: The answer is "abc", with the length of 3. 
// Example 2:

// Input: "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3. 
//              Note that the answer must be a substring, "pwke" is a subsequence and not a substring.