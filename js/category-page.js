import { getCategory, getItemsByCategory } from './app/category.js';
import { newItem } from './app/item.js';

$(document).ready(() => {
  if (localStorage.getItem('jwtToken') && localStorage.getItem('username')) {
    const username = localStorage.getItem('username');
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('jwtToken');
    $('#navbar-welcome').html(`Welcome, ${username}`)
  }
  const category = url('?category');
  getCategory(category);
  getItemsByCategory(category);
  $('#share-button').click(event => newItem());
});
