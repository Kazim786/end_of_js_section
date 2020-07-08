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
  

//Andrei Exercise