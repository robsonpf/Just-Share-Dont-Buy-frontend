import { newItem } from './app/item.js';

$(document).ready(() => {
  $('#share-button').click(event => newItem());
});
