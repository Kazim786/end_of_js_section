// Questions Marks
// Have the function QuestionsMarks(str) take the str string parameter, which will contain single digit numbers, letters, and question marks, and check if there are exactly 3 question marks between every pair of two numbers 
//that add up to 10. If so, then your program should return the string true, otherwise it should return the string false. If there aren't any two numbers that add up to 10 in the string, then your program should return false as well.

// For example: if str is "arrb6???4xxbl5???eee5" then your program should return true because there are exactly 3 question marks between 6 and 4, and 3 question marks between 5 and 5 at the end of the string.

const questionMark = (str) => {
    if(str.includes("?") === true){ //Checks to see if the string has question mark
        const arr = str.split(", ");
        for(let i = 0; i < arr.length; i++){
            if(arr[i] == [0-9] && arr[i] + arr[i + 1] == 10){
                return console.log("Number that plus the other number == 10")
            }
        }
    } else{
        console.log("no uestion mark")
    }

}
console.log(questionMark("1a9d?fg55"))
