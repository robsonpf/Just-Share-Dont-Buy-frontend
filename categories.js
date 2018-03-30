
getUrlVars = () => {
  let vars = [], hash;
  let hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
  hashes.forEach((hash, idx) => {
    hash = hashes[idx].split('=');
    vars.push(hash[0]);
    vars[hash[0]] = hash[1];
  })
  return vars;
}

let category = getUrlVars()["category"];
console.log(category)
$( document ).ready(() => {
  axios.get(`/categories/${category}`)
    .then(response => {
      console.log(response);
      const category = response.data
      $('#category-title').html(category.name)
    })
    .catch(error => {
      console.log(error);
    });

  axios.get(`/categories/${category}/items`)
    .then(response => {
      console.log(response);
      const items = response.data;
      items.forEach(item => {
        console.log('item ===== ', item);
        if (!item.reserved) {
          $('#items').append(`<a href="/item.html?item=${item.id}" class="btn"><b><u>${item.name}</b></u> <br> ${item.description}</a>`)
        }
      })
    })
    .catch(error => {
      console.log(error);
    });
});
