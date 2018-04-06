var baseUrl = `https://just-share-dont-buy-backend.herokuapp.com`;
var baseURL = `http://localhost:3000/signup`;

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("signUp").addEventListener("click", (event) => {
    event.preventDefault();
    const userNameId = document.querySelector("#userNameId")
    const phoneNumber = document.querySelector("#phoneNumber")
    const signUpEmail = document.querySelector("#signUpEmail")
    const signUpPassword = document.querySelector("#signUp-Password")



    axios.post(`${baseUrl}/signup`, {
      "name": userNameId.value,
      "phone": phoneNumber.value,
      "email": signUpEmail.value,
      "password": signUpPassword.value
    })

    .then(result => {
      console.log("result ==>", result);
      localStorage.setItem("token", JSON.stringify(token));

      location.assign("index.html")
    })
    .catch(err => {
      console.log(err.response);
    })
  })
})





//
//
// var data = {};
// data.name = document.getElementById("name").value;
// data.email  = document.getElementById("email").value;
// data.password  = document.getElementById("password").value;
// // Aqui voce deveria validar se a password do usuario confere com o campo do form 're-type password'
// // Se voce nao criou esse campo no form, ignore isso
//
// // convert JSON object to string
// var json = JSON.stringify(data);
//
// var xhr = new XMLHttpRequest();
// xhr.open("POST", url, true);
// xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
// xhr.onload = function () {
// 	var token = JSON.parse(xhr.responseText);
// 	// Nao lembro que status estamos retornando quando o usuario é criado com sucesso, o correto seria 201, mas pode ser que esquecemos e estamos retornando 200
// 	if (xhr.readyState == 4 && xhr.status == "201") {
// 		location.href = '/items'
// 		//Salva o token no data store para ser usado nos proximos requests, Lembra que os proximos requests vc tem que setar o Authorization header com o token obtido aqui. Veja seu Postman.
// 		localStorage.setItem("token", token);
// 	} else {
// 		//trata o erro aqui
// 		console.error(token);
// 	}
// }
// xhr.send(json);
