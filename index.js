const elTemplate = document.querySelector(".template").content
const elList = document.querySelector(".card__wrapper")
const elModal = document.querySelector(".modal")
const closeBtn = document.querySelector(".close__Btn")

window.addEventListener("click", e => {
    if (elModal == e.target)
    elModal.classList.remove("active")
})

closeBtn.addEventListener("click", () => {
    elModal.classList.remove("active")
})
 const openMore =(e) => {
    let dataId = e.target.dataset.Id
 }
function renderArr(arr, list) {
    arr?.map(item => {
        let cloneTemplate = elTemplate.cloneNode(true)

        let cardImg = cloneTemplate.querySelector("img")
        let cardTitle = cloneTemplate.querySelector("h3")
        let cardPrice = cloneTemplate.querySelector("p")

        let cardBtn = cloneTemplate.querySelector("button")
        cardBtn.dataset.Id = item.id;

        let modalImg = elModal.querySelector("img")
        let modalTitle = elModal.querySelector("h3")
        let modalDescription = elModal.querySelector("p")
        let modalPrice = elModal.querySelector("h4")




        cardBtn.addEventListener("click", e => {
            elModal.classList.add("active")
            let dataId = e.target.dataset.Id

            if (dataId == item.id) {
                modalImg.src = item.image
                modalTitle.textContent = item.title
                modalDescription.textContent = item.description
                modalPrice.textContent = item.price
            }

            console.log(dataId);
        })


        cardImg.src = item.image
        cardTitle.textContent = item.title
        cardPrice.textContent = item.price + "$"


        list.appendChild(cloneTemplate)
    })
}

function fetchData() {
    fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(data => renderArr(data, elList))
}

fetchData()

function openNimadur(){
    window.open("./form.html")
}

let hamburger = document.querySelector(".burger")
let menu = document.querySelector(".menu")

let mode = true
hamburger.addEventListener("click", () => {
    if(mode == true){
        menu.classList.add("active")
    }else{
        menu.classList.remove("active")
    }

    mode =!mode
})

let todosArr = JSON.parse(window.localStorage.getItem("todos")) || []

const checkbox = document.getElementById("checkbox")
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark")
})