const baseUrl = `https://just-share-dont-buy-backend.herokuapp.com`;

getUrlVars = () => {
  let vars = [],
    hash;
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
$(document).ready(() => {
  axios.get(`${baseUrl}/categories/${category}`)
    .then(response => {
      console.log(response);
      const category = response.data
      $('#category-title').html(category.name)
    })
    .catch(error => {
      console.log(error);
    });

  axios.get(`${baseUrl}/categories/${category}/items`)
    .then(response => {
      console.log(response);
      const items = response.data;
      items.forEach(item => {
        console.log('item ===== ', item);
        if (!item.reserved) {
          $('.card-deck').append(`
            <div class="card category-item-card mb-4">
              <a class="a-card" href="/item.html?item=${item.id}">

                <img class="card-img-top" src="${item.photo}" width="286" height="195">

                <div class="card-body">
                  <h5 class="card-title">${item.name}</h5>
                  <p class="card-text">${item.description}</p>
                </div>
              </a>
            </div>
          `);
        }
      })
    })
    .catch(error => {
      console.log(error);
    });
});