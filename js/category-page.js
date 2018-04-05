import { getCategory, getItemsByCategory } from './app/category.js';
import { newItem } from './app/item.js';

$(document).ready(() => {
  const category = url('?category');
  getCategory(category);
  getItemsByCategory(category);
  $('#share-button').click(event => newItem());
});
