const frugment = document.createDocumentFragment()
const hhElemnet = document.querySelector(".hh")
const hhhElemnet = document.querySelector(".hhh")

const photoqElement = document.querySelector(".photoq")

let array = []

function infors() {
    fetch("http://localhost:8000/users/1")
    .then(res => res.json())
    .then(result => {
        hhElemnet.textContent = result.name
        hhhElemnet.textContent = result.name
        photoqElement.src = result.img
    })
}
infors()


const Len = document.querySelector(".len")

function Post() {
    fetch(" http://localhost:8000/imgs")
    .then(req => req.json())
    .then(resul =>  {
        Len.textContent = resul.length
        array = resul
        Pmap(array)
    })
}
Post()

const Pmap = (array) => {
    let photos_inforElement = document.querySelector(".photos_infor")
    array.forEach(element => {
        let Clone  = tempPhoto.content.cloneNode(true)
        Clone.querySelector(".phtot").src = element.imger
        frugment.appendChild(Clone)
    });
    photos_inforElement.appendChild(frugment)
}

const brandimg =document.querySelector(".brand-img")

brandimg.addEventListener("click" , event => {
    window.location = "./index.html"
})