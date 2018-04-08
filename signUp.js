var baseUrl = localStorage.getItem('baseUrl') || `https://just-share-dont-buy-backend.herokuapp.com`;

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("signUp").addEventListener("click", (event) => {
    event.preventDefault();
    const userNameId = document.querySelector("#userNameId")
    const phoneNumber = document.querySelector("#phoneNumber")
    const signUpEmail = document.querySelector("#signUpEmail")
    const signUpPassword = document.querySelector("#signUp-Password")

    axios.post(`${baseUrl}/users`, {
      "name": userNameId.value,
      "phone": phoneNumber.value,
      "email": signUpEmail.value,
      "password": signUpPassword.value
    })
    .then(result => {
      console.log("result ==>", result);
      const { access_token, username } = result.data;
      localStorage.setItem('jwtToken', access_token);
      localStorage.setItem('username', username);
      location.assign("index.html")
    })
    .catch(err => {
      console.log(err.response);
    })
  })
})

