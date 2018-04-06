var baseUrl = `https://just-share-dont-buy-backend.herokuapp.com`;

document.querySelector("#logIn-button").addEventListener("click", (event) => {
  event.preventDefault()
  const loginEmail = document.getElementById("login-Email").value
  const loginPassword = document.getElementById("logIn-Password").value

  axios.post(`${baseUrl}/login`, {
    "email": loginEmail,
    "password": loginPassword
  })
  .then(result => {
    console.log("result ==>", result);
    localStorage.setItem(JSON.stringify(token));

    location.assign("index.html")
  })
  .catch(err => {
    console.log(err.response)
  })
})
