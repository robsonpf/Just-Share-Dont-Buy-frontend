const baseURL = 'http://localhost'

document.addEventListener('DOMContentLoaded', () => {
  addPost()
})
document.getElementById("#share-button").addEventListener('click', (event) => {

})
axios.all([

])




// when the dom loads
// make an ajax request with axios to get all reservations
// loop through result
// output a piece of DOM for each reservation
//
// const baseURL = 'http://localhost:3000/item'
//
//
// document.addEventListener('DOMContentLoaded', () => {
//   createItem()
//
// })
//
// const createItem () => {
//   axios.post(`${baseURL}`, {
//     "category_id":3,
//     "user_id":3,
//     "description":"Bla Bla Bla",
//     "name":"My Item"
//   })
// }.then(result => {
//   console.log(result);
// })
// .catch(error => {
//   console.log(error)
// })
// }
