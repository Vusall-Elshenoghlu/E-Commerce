import Base from "./BaseUrl/baseUrl.js";
import { getDatas,postData } from "./Request/requests.js";

// getDatas(Base + "/users")
// .then(respo => console.log(respo.datas))

let registerForm = document.querySelector(".register-form");
let nameInput = document.querySelector("#name");
let surnameInput = document.querySelector("#surname");
let emailInput = document.querySelector("#exampleInputEmail1");
let passwordInput = document.querySelector("#exampleInputPassword1");
registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (nameInput.value.trim() != "" && surnameInput.value.trim() != "" && emailInput.value.trim() != "" && passwordInput.value != "") {
        getDatas(Base + "/users")
            .then(respo => {
                let users = respo.datas
                // console.log(users);

                let findedUser = users.find(user => emailInput.value == user.email)
                if (findedUser) {
                    alert(`This email has already been registered..\n${emailInput.value}`)
                } else {
                    let newObject = {
                        name:nameInput.value,
                        surname:surnameInput.value,
                        email:emailInput.value,
                        password:passwordInput.value,
                        isAdmin: false,
                        favorites: []

                    }
                    postData(Base + "/users",newObject)
                    .then(respo => console.log(respo.oneData))
                    window.location.href = "login.html"
                    alert("User has registered Succesfully....")
                }
            })
    }else{
        alert("All inputs must filled in...")
    }
})