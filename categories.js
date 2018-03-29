let category = $.url('?category');
$( document ).ready(() => {
  axios.get(`/categories/${category}`)
    .then(response => {
      console.log(response);
      const category = response.data
      $('#category-title').html(category.name)
    })
    .catch(error => {
      console.log(error);
    });

  axios.get(`/categories/${category}/items`)
    .then(response => {
      console.log(response);
      const items = response.data;
      items.forEach(item => {
        $('#items').append(`<button type="button"><p><b><u>${item.name}</b></u> <br> ${item.description}</p></button>`)
        })
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
