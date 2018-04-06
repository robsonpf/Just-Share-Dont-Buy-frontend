import { getCategory, getItemsByCategory } from './app/category.js';
import { newItem } from './app/item.js';

if (localStorage.getItem('jwtToken')) {
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('jwtToken');
}

$(document).ready(() => {
  const category = url('?category');
  getCategory(category);
  getItemsByCategory(category);
  $('#share-button').click(event => newItem());
});
