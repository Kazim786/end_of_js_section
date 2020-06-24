// Number 1 Find Intersection


const arr = ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"];

function FindIntersection(strArr) {
  let e1 = strArr[0].split(", ");
  
  strArr.unshift(e1) // now the e1 array is on index 0
  strArr.splice(1, 1) // the string which used to be on index 0 is on index 1 now and has to be removed
  
  let e2 = strArr[1].split(", "); // string 2 is back on index 1 and has to be turn into an array.
  
  strArr.push(e2) //string 2 is an array now and is being put into the parent array
  strArr.splice(1, 1); //string 2 is being removed
  console.log(strArr) 
  console.log(strArr[1][3])
  // So far I’ve made the strings into arrays. Both arrays are within a parent array.
  
  let output = [] // This will hold elements that intersect in both strings.
  
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[0][i] === strArr[1][i]) {
      console.log(output.push(strArr[0][i]));
    }
    else {
      console.log(`no duplicates ${i}`)
    }
  }
  
  return output
}

console.log(FindIntersection(arr));