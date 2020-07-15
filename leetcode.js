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






var addTwoNumbers = function(l1, l2) {
    //turn arrays into strings first and then join them then turn to numbers
      l1 = l1.reverse()
      l2 = l2.reverse()
      l1 = l1.join("")
      l2 = l2.join("")
      l1 = Number(l1)
      l2 = Number(l2)
      
      let sum = l1 + l2;
      const sumArr = []
      sum = sum.toString()
      sum = sum.split("")
      sumArr.push(sum)
      
      
  // for(let i = 0; i < l1.length; i++){
  //     sum.push(Number(l1.substring(i) + Number(l2.substring(i)) 
  // }
        console.log(sum)
        return sumArr
  };
  