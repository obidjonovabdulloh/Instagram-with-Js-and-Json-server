const Fragment = document.createDocumentFragment()
let array = []
function Users() {
    fetch("http://localhost:8000/users")
    .then(res => res.json())
    .then(result => {
        array = result
        UseraMap(array)
    })
}
Users()

const UseraMap = (array) => {
    let statusElement = document.querySelector(".status-wrapper")
    array.forEach(element => {
        let Clone = template.content.cloneNode(true)
        Clone.querySelector(".username").textContent = element.name
        Clone.querySelector(".imgg").src = element.img
        Fragment.appendChild(Clone)
    });
    statusElement.appendChild(Fragment)
}




const Frugment = document.createDocumentFragment()
let prray = []

function Coments() {
    fetch("http://localhost:8000/users")
    .then(req => req.json())
    .then(repult => {
        prray = repult
        ComentsMap(prray)
    })
}
Coments()

const ComentsMap = (prray) => {
    let leftcolElemnt = document.querySelector(".left-col")
    prray.forEach((elem) =>  {
        let Plone = templateCometns.content.cloneNode(true)
        Plone.querySelector(".username").textContent = elem.name
        Plone.querySelector(".likes").textContent = elem.likes
        Plone.querySelector(".assa").src = elem.img
        Plone.querySelector("#sapnn").textContent = elem.name
        Frugment.appendChild(Plone)
    })
    leftcolElemnt.appendChild(Frugment)

}



const Frugments = document.createDocumentFragment()
let prrays = []

function Comentss() {
    fetch("http://localhost:8000/users")
    .then(reqs => reqs.json())
    .then(repults=> {
        prrays = repults
        ComentsMaps(prrays)
    })
}
Comentss()

const ComentsMaps = (prrays) => {
    let leftcolElemnts = document.querySelector(".right-col")
    prrays.forEach((elems) =>  {
        let Plones = tempUsers.content.cloneNode(true)
        Plones.querySelector(".qwe").textContent = elems.name
        Plones.querySelector(".imger").src = elems.img
        Frugments.appendChild(Plones)
    })
    leftcolElemnts.appendChild(Frugments)

}



window.addEventListener("load", () => {
    if (!window.localStorage.getItem("token")) {
        window.location = "./login.html"
    }
})

const hrt = document.querySelector(".hrt") 

hrt.addEventListener("click" , e => {
    hrt.style.color = "red" 
})
hrt.addEventListener("dblclick" , e => {
    hrt.style.color = "black" 
})