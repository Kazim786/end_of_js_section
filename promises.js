// //NOTES
// const fakeRequest = (url) => {
//     new Promise((resolve, reject) => {
//       setTimeout(() => {
//         const pages = {
//           '/users': [
//             {id: "529590", name: 'Kazim'},
//             {id: '529580', name: 'Foorkan'}
//           ],
//           '/aboutus': "We are the lovers of Imam Hussain (as)"
//         };
//         const data = pages[url];
//         if(data){ //data is from our existing data of url's
//           resolve({status: 200, data})
//         } else{
//           reject({status: 404})
//         }
//       }, 2000)
//     })
//   }
  
//   fakeRequest('/users')
//   .then((res) => {
//     console.log('Status Code', res.status);
//     console.log('Data', res.data);
//     console.log('REQUEST WORKED');
//   })
//   .catch((res) => {
//     console.log(res.status);
//     console.log('Request failed');
//   });
  
//   fakeRequest('/aboutus')
//   .then((res) => {
//     console.log('Status Code', res.status)
//     console.log('Data', res.data);
//     console.log('REQUEST WORKED')
//   })
//   .catch((res) => {
//     console.log(res.status)
//     console.log('Request failed')
//   });
  

//Andrei Exercise:

// Solve the questions below:

// #1) Create a promise that resolves in 4 seconds and returns "success" string
const aPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('success')
    }, 4000)
})

// #2) Run the above promise and make it console.log "success"
aPromise.then(console.log)

// #3) Read about Promise.resolve() and Promise.reject(). How can you make
// the above promise shorter with Promise.resolve() and console loggin "success"


// #4) Catch this error and console log 'Ooops something went wrong'
Promise.reject('failed').catch(console.log('oops something went wrong'))

// #5) Use Promise.all to fetch all of these people from Star Wars (SWAPI) at the same time.
// Console.log the output and make sure it has a catch block as well.
const urls = [
  'http://swapi.dev/api/people/1',
  'http://swapi.dev/api/people/2',
  'http://swapi.dev/api/people/3',
  'http://swapi.dev/api/people/4'
]

Promise.all(urls.map(url => { //map works with each element of the array and manipulates it
    return fetch(url).then(resp => resp.json()) //This .then is part of the fetch
})).then(results => {
    console.log(results[0])
    console.log(results[1])
    console.log(results[2])
    console.log(results[3])
})
.catch(console.log('Error'))
// #6) Change one of your urls above to make it incorrect and fail the promise
// does your catch block handle it?














































// ********************
//Andrei Exercise solutions:

// Solve the questions below:

// #1) Create a promise that resolves in 4 seconds and returns "success" string
// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("success");
//     }, 4000)
//   });
  
//   // #2) Run the above promise and make it console.log "success"
//   promise.then(console.log)
//   // or
//   promise.then(resp => console.log(resp))
  
//   // #3) Read about Promise.resolve() and Promise.reject(). How can you make
//   // the above promise shorter with Promise.resolve() and console loggin "success"
//   const promise = Promise.resolve(
//     setTimeout(() => {
//       console.log("success");
//     }, 4000)
//   );
  
//   // #4) Catch this error and console log 'Ooops something went wrong'
//   Promise.reject('failed')
//     .catch(console.log('Ooops something went wrong'))
  
//   // #5) Use Promise.all to fetch all of these people from Star Wars (SWAPI) at the same time.
//   // Console.log the output and make sure it has a catch block as well.
//   const urls = [
//     'http://swapi.dev/api/people/1',
//     'http://swapi.dev/api/people/2',
//     'http://swapi.dev/api/people/3',
//     'http://swapi.dev/api/people/4'
//   ]
  
//   Promise.all(urls.map(url =>
//       fetch(url).then(people => people.json())
//   ))
//     .then(array => {
//       console.log('1', array[0])
//       console.log('2', array[1])
//       console.log('3', array[2])
//       console.log('4', array[3])
//     })
//     .catch(err => console.log('ughhhh fix it!', err));
  
//   // #6) Change one of your urls above to make it incorrect and fail the promise
//   // does your catch block handle it?