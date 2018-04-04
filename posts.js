const baseUrl = localStorage.getItem('baseUrl') || `https://just-share-dont-buy-backend.herokuapp.com`;

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById("share-button").addEventListener('click', (event) => {
    const itemName = document.querySelector("#Items-name").value
    const description = document.querySelector("#Items-description").value
    const userId = 1
    const selector = document.querySelector("#Category");
    const categoryId = selector.options[selector.selectedIndex].value
    const photo = document.querySelector("#Items-photo").value
    if (!validateAllForms()) {
      alert('Form data invalid');
      return;
    }

      console.log("Hello");
      axios.post(`${baseUrl}/items`, {

        "category_id": categoryId,
        "user_id": 1,
        "description": description,
        "name": itemName,
        "photo": photo
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


validateAllForms = () => {
  var isValid = true;
  const itemName = document.querySelector("#Items-name").value
  const description = document.querySelector("#Items-description").value
  const selector = document.querySelector("#Category")
  const categoryId = selector.options[selector.selectedIndex].value
  const photo = document.querySelector("#Items-photo").value
  if (itemName === null || itemName === undefined || itemName === "") return false
  if (description === null || description === undefined || description === "") return false
  if (categoryId === null || categoryId === undefined || categoryId === "") return false
  if (photo === null || photo === undefined || photo === "") return false
  return isValid
}
