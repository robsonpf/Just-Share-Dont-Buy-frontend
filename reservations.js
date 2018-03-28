// when the dom loads
// make an ajax request with axios to get all reservations
// loop through result
// output a piece of DOM for each reservation

document.addEventListener('DOMContentLoaded', () => {
  // createItem()
})

const createItem = () => {
  axios.post(`/item`, {
    "category_id":3,
    "user_id":3,
    "description":"Bla Bla Bla",
    "name":"My Item"
  })
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.log(error)
  })
}

//
// function createItem() {
//   $.post(`http://localhost:3000/item`, {
//     "category_id":3,
//     "user_id":3,
//     "description":"Bla Bla Bla",
//     "name":"My Item"
//   })
//     .then(result => {
//       console.log(result);
//     })
//     .catch(error => {
//       console.log(error)
//     })
// }
