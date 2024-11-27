import { getDatas,getDataById } from "./Request/requests.js";
import Base from "./BaseUrl/baseUrl.js";
let container = document.querySelector(".container");

let body = document.querySelector("body");
body.style.height = "100vh"
body.style.width = "100%"

container.style.display = "flex"
container.style.justifyContent = "center"
body.style.alignItems = "center"
container.style.margin = "0px auto"

let id = new URLSearchParams(window.location.search).get("id");
console.log(id);

getDataById(Base + "/products",id)
.then(respo => showData(respo.oneData))


function showData(product){
    container.innerHTML = `
                    <div class="card" style="width: 400px">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHiC27pYTIkSVuJygMVtjj-bt_0KIapmr_UA&s" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${product.brand}</h5>
                            <p class="card-text">${product.model}</p>
                            <p class="card-text">year: ${product.year}</p>
                            <p class="card-text">${product.price} $</p>
                            <a href="details.html?id=${product.id}" class="btn btn-outline-primary">Details</a>
                            <a href="#" class="btn btn-outline-primary"><i class="fa-solid fa-heart"></i></a>
                            <a href="#" class="btn btn-outline-danger"><i class="fa-solid fa-basket-shopping"></i> </a>
                            <a href="main.html" class="btn btn-outline-danger">Go Back </a>
                        
                    </div>
                </div>`
}
