// Solve the below problems:

// #1) Convert the below promise into async await
fetch("https://jsonplaceholder.typicode.com/users/")
  .then((response) => response.json())
  .then(console.log);

  //My Code:
// async function question1(){
//   try{
//     const resp = await axios.get("https://jsonplaceholder.typicode.com/users/") //Using axios. Works differently than fetch. So no .json() and .then
//     console.log(resp)

//   }
//   catch(err){
//     console.log(err)
//   }
 
// }

//****************************** */

//MY OWN PRACTICE CODE. SEPARATE FROM THE EXERCISES GIVEN BY ANDREI:

// function getNames (results){
//   for(let user of results){
//     console.log(user.name)
//   }}

// async function question1(){
//   try{
//     const resp = await axios.get("https://jsonplaceholder.typicode.com/users/") //Using axios. Works differently than fetch. So no .json() and .then
//     const results = resp.data;
//     // console.log(results[0].name)
//     getNames(results)

//   }
//   catch(err){
//     console.log(err)
//   } 
// }

//************************ */  

// #2) ADVANCED: Update the function below from the video to also have
// async await for this line: fetch(url).then(resp => resp.json())
// So there shouldn't be any .then() calls anymore!
// Don't get discouraged... this is a really tough one...
const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];

const getData = async function () {
  const [users, posts, albums] = await Promise.all(
    urls.map((url) => fetch(url).then((resp) => resp.json())),
  );
  console.log("users", users);
  console.log("posta", posts);
  console.log("albums", albums);
};

//Copied the code above. Now i will change it to an async

const getData = async function () {
  const [users, posts, albums] = await Promise.all(
    urls.map(async function (url) {
      const response = await fetch(url);
      return response.json();
    }),
  );
  console.log("users", users);
  console.log("posta", posts);
  console.log("albums", albums);
};







// #3)Add a try catch block to the #2 solution in order to catch any errors. // Now, use the given array containing an invalid url, so you console.log  //your error with 'oooooops'.
const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholdeTYPO.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];

//************ */

//Tried my own exercise with async await


async function films (){
  const films = await axios.get('https://swapi.dev/api/people/1/')
  try{
      
      for(let i of films.data.films){
        console.log(i)
      }
  }
  catch{
    console.log('error')
  }
}
console.log(films())