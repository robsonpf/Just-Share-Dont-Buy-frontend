// Read the item ID from the URL
let item = $.url('?item');

// When the page loads
$( document ).ready(() => {
  // Make a GET request for the item
  axios.get(`/items/${item}`)
    .then(response => {
      console.log(response);
      const item = response.data
      $('#item-title').html(item.name)
      $('#item-description').html(item.description)
      $('#item-image').html(`<img src="${item.photo}" />`)
      $('#date').html(new Date(item.created_at));
      $('#availability').html(item.reserved ? "Not Available" : "Available")
      axios.get(`/users/${item.user_id}`)
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
});

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById("reservation_button").addEventListener('click', (event) => {

    // $('.alert').alert()

    axios.patch(`/items/${item}`, {
      "reserved":true
    })
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.log(error);
      })
  })
})
