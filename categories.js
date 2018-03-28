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
        $('#items').append(`<p><b>${item.name}</b></p>`)
        $('#items').append(`<p>${item.description}</p>`)
      })
    })
    .catch(error => {
      console.log(error);
    });
});
