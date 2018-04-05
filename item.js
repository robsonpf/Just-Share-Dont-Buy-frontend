var baseUrl = localStorage.getItem('baseUrl') || `https://just-share-dont-buy-backend.herokuapp.com`;

// Read the item ID from the URL
let item = $.url('?item');

// When the page loads
$(document).ready(() => {
  // Setup up click listener for 'Book' button
  $('#book').click(event => {
    axios.patch(`${baseUrl}/items/${item}`, {reserved: true})
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.log(error);
      });
  });

  $('#unbook').click(event => {
    axios.patch(`${baseUrl}/items/${item}`, {reserved: false})
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.log(error);
      });
  });

  $('#modal').on('hidden.bs.modal', () => {
    location.reload();
  });

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
});

