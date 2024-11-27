import {getDatas} from "./Request/requests.js";
import Base from "./BaseUrl/baseUrl.js"
let loginForm = document.querySelector(".login-form");
let emailInput = document.querySelector("#exampleInputEmail1");
let passwordInput = document.querySelector("#exampleInputPassword1");
loginForm.addEventListener("submit", (e)=>{
    e.preventDefault()
    getDatas(Base + "/users")
    .then(respo =>{
        let users = respo.datas
        //console.log(users);
        let findedUser = users.find(user => user.email == emailInput.value && user.password == passwordInput.value)
        if (findedUser){
            localStorage.setItem("currentUserId",findedUser.id)
            window.location.href = "main.html"
            alert("You looged in succesfully")
        }else{
            alert("invalid email or password...")
        }
    })
})