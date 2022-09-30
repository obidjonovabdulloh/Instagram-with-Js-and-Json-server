const formElement = document.querySelector("#login_form")
const emailsElement = document.querySelector("#emails")
const passwordElement = document.querySelector("#password")


function LoginPage() {
    formElement.addEventListener("submit" , event => {
        console.log(event);
        event.preventDefault()
        let header = new Headers
        header.append("Content-type" , "application/json")
        let row = JSON.stringify({
            "email": emailsElement.value,
            "password": passwordElement.value
        })
        let reqoird = ({
            method : "POST",
            headers : header,
            body : row 
        })
        fetch("https://x8ki-letl-twmt.n7.xano.io/api:vR9Klpfo/auth/login" , reqoird)
        .then(res => res.text())
        .then(result => {
            if(JSON.parse(result).authToken) {
                window.localStorage.setItem("token" , result)
                window.location = "./index.html"
            }else {
                window.localStorage.removeItem("token")
            }
            if(JSON.parse(result).message) {
                passwordElement.style.background = "red"
            }
            if(!JSON.parse(result).authToken) {
                window.location = "./login.html"
            }
        })
    })
}
LoginPage()