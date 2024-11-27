import { getDatas } from "./Request/requests.js";
import Base from "./BaseUrl/baseUrl.js";


let row = document.querySelector(".row");
let loginButton = document.querySelector(".login");
let nameLogout = document.querySelector(".name-logout")
let userID = localStorage.getItem("currentUserId") || null;


function createNav() {

    let userID = localStorage.getItem("currentUserId") || null;


    if (userID) {
        loginButton.style.display = "none"

        getDatas(Base + "/users")
            .then(respo => {
                let users = respo.datas
                users.forEach(user => nameLogout.innerHTML = `<span>${user.name}</span>
            <button class="btn logout btn-outline-danger" type="submit">Log out</button>`)
                console.log(respo.datas);
                let logOutButton = document.querySelector(".logout");
                logOutButton.addEventListener("click", (e) => {
                    e.preventDefault();
                    Swal.fire({
                        title: "Are you sure?",
                        text: "You won't be able to revert this!",
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "Yes, Log out!"
                    }).then((result) => {
                        if (result.isConfirmed) {
                            localStorage.removeItem("currentUserId");

                            Swal.fire({
                                title: "Logged Out!",
                                text: "You have logged been out Succesfully",
                                icon: "success"
                            });
                            createNav();
                        }
                    });
                })
            })
    } else {
        loginButton.style.display = "block";
        nameLogout.style.display = "none"
    }
}

createNav()



function getProduct() {
    getDatas("http://localhost:3000/products")
        .then(respo => showProducts(respo.datas))
}
getProduct()

function showProducts(products) {
    row.innerHTML = ""
    products.forEach(product => {
        row.innerHTML += `
        <div class="col">
                    <div class="card" style="width: 18rem;">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHiC27pYTIkSVuJygMVtjj-bt_0KIapmr_UA&s" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${product.brand}</h5>
                            <p class="card-text">${product.model}</p>
                            <p class="card-text">year: ${product.year}</p>
                            <p class="card-text">${product.price} $</p>
                            <a href="details.html?id=${product.id}" class="btn btn-outline-primary">Details</a>
                            <a href="#" class="btn btn-outline-primary"><i class="fa-solid fa-heart"></i></a>
                            <a href="#" class="btn btn-outline-danger"><i class="fa-solid fa-basket-shopping"></i> </a>
                        </div>
                    </div>
                </div>`
    });
}

loginButton.addEventListener("click", (e) => {
    e.preventDefault()
    window.location.href = "login.html"
})