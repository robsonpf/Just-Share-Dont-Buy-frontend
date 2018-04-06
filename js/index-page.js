import { newItem } from './app/item.js';

if (localStorage.getItem('jwtToken')) {
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('jwtToken');
}

$(document).ready(() => {
  $('#share-button').click(event => newItem());
});
