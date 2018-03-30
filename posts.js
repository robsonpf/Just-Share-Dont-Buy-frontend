document.addEventListener('DOMContentLoaded', () => {
  document.getElementById("share-button").addEventListener('click', (event) => {
    const itemName = document.querySelector("#Items-name").value
    const description = document.querySelector("#Items-description").value
    const userId = 1
    const selector = document.querySelector("#Category");
    const categoryId = selector.options[ selector.selectedIndex ].value


    axios.post(`/items`, {
        "category_id": categoryId,
        "user_id": 1,
        "description": description,
        "name": itemName
      })
      .then(result => {
        console.log('THIS IS MY RESULT ==== ', result);
        document.location = '/category.html?category=' + categoryId;
    })
    .catch(error => {
      console.log(error);
    })
    document.location = $('#category-title').html(category.name);
  })
})
