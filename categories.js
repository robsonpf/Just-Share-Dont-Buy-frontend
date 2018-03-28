let category = $.url('?category');
$( document ).ready(() => {
  axios.get('/categories/' + category)
    .then(response => {
      console.log(response);
      const category = response.data
      $('#category-title').html(category.name)
    })
    .catch(error => {
      console.log(error);
    });
});
