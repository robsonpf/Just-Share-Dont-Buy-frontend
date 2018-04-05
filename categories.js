const baseUrl = localStorage.getItem('baseUrl') || `https://just-share-dont-buy-backend.herokuapp.com`;

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
$(document).ready(() => {

  axios.get(`${baseUrl}/categories/${category}`)

    .then(response => {
      const category = response.data
      $('#category-title').html(category.name)
    })
    .catch(error => {
      console.log(error);
    });


  axios.get(`${baseUrl}/categories/${category}/items`)

    .then(response => {
      const items = response.data;
      items.forEach(item => {
        let url = window.location.href.split("/category.html?")[0]
        let badge;
        if (item.reserved) {
          badge = '<span class="badge badge-secondary float-right mt-1">Unavailable</span>'
        } else {
          badge = '<span class="badge badge-success float-right mt-1">Available</span>'
        }
        $('.card-deck').append(`
          <div class="card category-item-card mb-4">
            <a class="a-card" href="${url}/item.html?item=${item.id}">

              <img class="card-img-top" src="${item.photo}" width="286" height="195">

              <div class="card-body">
                ${badge}
                <h5 class="card-title">${item.name}</h5>
                <p class="card-text">${item.description}</p>
              </div>
            </a>
          </div>
        `);
      })
    })
    .catch(error => {
      console.log(error);
    });
});
