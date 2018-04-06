import { bookItem, unbookItem, newItem, getItem } from './app/item.js';

if (localStorage.getItem('jwtToken')) {
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('jwtToken');
}

$(document).ready(() => {
  const item = url('?item');

  $('#book').click(event => bookItem(item));
  $('#unbook').click(event => unbookItem(item));
  $('#modal').on('hidden.bs.modal', () => {
    location.reload();
  });
  $('#share-button').click(event => newItem());
  getItem(item);
});
