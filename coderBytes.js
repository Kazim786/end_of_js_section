// Number 1 Find Intersection

const arr = ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"];



function FindIntersection(strArr, lookingFor) { 
  let e1 = strArr[0].split();
  strArr.unshift(e1)
  
  // strArr.splice(1, 1);
  // strArr.pop()
  // strArr.pop();

strArr.splice(1, 1)
 let e2 = strArr[1].split();

 strArr.push(e2)

 strArr.splice(1, 1);
  
  console.log(strArr)

  //so far ive made the strings into arrays. both arrays are within a parent array
  let output = []
  for(let i = 0; i < strArr.length; i++){
    if(strArr[0][i] in strArr[1][i]){
      output.push(strArr[0][i]);

    }
    else{
      console.log('no duplicates')
    }
  }

  // code goes here  

  //return lookingFor; 
}
console.log(FindIntersection(arr));
   
// keep this function call here 
// console.log(FindIntersection(readline()));
// console.log(FindIntersection(arr));
