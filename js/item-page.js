import { bookItem, unbookItem, newItem, getItem } from './app/item.js';

$(document).ready(() => {
  if (localStorage.getItem('jwtToken') && localStorage.getItem('username')) {
    const username = localStorage.getItem('username');
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('jwtToken');
    $('#navbar-welcome').html(`Welcome, ${username}`)
  }
  const item = url('?item');

  $('#book').click(event => bookItem(item));
  $('#unbook').click(event => unbookItem(item));
  $('#modal').on('hidden.bs.modal', () => {
    location.reload();
  });
  $('#share-button').click(event => newItem());
  getItem(item);
});
