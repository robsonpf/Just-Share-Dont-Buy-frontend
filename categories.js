let category = $.url('?category');
$( document ).ready(() => {
  axios.get('/categories/' + category)
    .then(response => {
      console.log(response);
      const category = response.data
      $('#category-title').html('Category: ' + category.name)
    })
    .catch(error => {
      console.log(error);
    });
});

// const baseURL = 'http://localhost:3000'
//
// document.addEventListener('DOMContentLoaded', () => {
//   axios.all([
//     axios.get(`${baseURL}/items`),
//     axios.get(`${baseURL}/users`),
//     axios.get(`${baseURL}/categories`)
//   ])
//   .then(axios.spread((items, users, categories) => {
//     console.log(items.data);
//     console.log(users.data);
//     console.log(categories.data);
//
//
//     let categoryItems = []
//
//     let categoryHeaderArray = document.querySelectorAll('.category')
//     categoryHeaderArray.forEach(category => {
//       console.log('CATEGORY === ', category.id);
//
//       categoryItems.push(items.data.filter(item => item.category_id === Number(category.id)))
//       console.log(categoryItems);
//
//     })
//   }))
// })
//
//
// loadData = () => {
//
// }
