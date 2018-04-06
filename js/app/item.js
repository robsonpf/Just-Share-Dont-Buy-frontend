const baseUrl = localStorage.getItem('baseUrl') || `https://just-share-dont-buy-backend.herokuapp.com`;

export const bookItem = (item) => {
  axios.patch(`${baseUrl}/items/${item}`, {reserved: true})
    .then(result => {
      console.log(result);
    })
    .catch(error => {
      console.log(error);
    });
  };

export const unbookItem = (item) => {
  axios.patch(`${baseUrl}/items/${item}`, {reserved: false})
    .then(result => {
      console.log(result);
    })
    .catch(error => {
      console.log(error);
    });
  };

export const getItem = (item) => {
  // Make a GET request for the item
  axios.get(`${baseUrl}/items/${item}`)
    .then(response => {
      const item = response.data
      $('#item-title').html(item.name)
      $('#item-description').html(item.description)
      $('#item-image').html(`<img src="${item.photo}" height=300 width=425 />`)
      $('#date').html(new Date(item.created_at));
      if (item.reserved) {
        $('#book').hide();
        $('#modal-title').html(`Successfully unbooked ${item.name}!`)
      } else {
        $('#unbook').hide();
        $('#modal-title').html(`Successfully reserved ${item.name}!`)
      }
      $('#availability').html(item.reserved ? "Not Available" : "Available")
      axios.get(`${baseUrl}/users/${item.user_id}`)
        .then(response => {
          const user = response.data
          $('#user-name').html(user.name)
          $('#user-phone').html(user.phone)
          $('#user-email').html(user.email)
        })
    })
    .catch(error => {
      console.log(error);
    });
};

export const newItem = () => {
  const itemName = document.querySelector("#Items-name").value
  const description = document.querySelector("#Items-description").value
  const userId = 1
  const selector = document.querySelector("#Category");
  const categoryId = selector.options[selector.selectedIndex].value
  const photo = document.querySelector("#Items-photo").value
  if (!validateItemForm()) {
    alert('Form data invalid');
    return;
  }

  axios.post(`${baseUrl}/items`, {
      "category_id": categoryId,
      "user_id": 1,
      "description": description,
      "name": itemName,
      "photo": photo
    })
    .then(result => {
      document.location = '/category.html?category=' + categoryId;
    })
    .catch(error => {
      console.log(error);
    })
  document.location = $('#category-title').html(category.name);
};

const validateItemForm = () => {
  const itemName = document.querySelector("#Items-name").value
  const description = document.querySelector("#Items-description").value
  const selector = document.querySelector("#Category")
  const categoryId = selector.options[selector.selectedIndex].value
  const photo = document.querySelector("#Items-photo").value
  if (itemName === null || itemName === undefined || itemName === "") return false
  if (description === null || description === undefined || description === "") return false
  if (categoryId === null || categoryId === undefined || categoryId === "") return false
  if (photo === null || photo === undefined || photo === "") return false
  return true
};
