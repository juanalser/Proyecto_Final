const registerform = document.querySelector(".Register-form")

function GuardarUsuario(event){
    event.preventDefault();
    const inputs = event.target.elements;
    const Usuario = {
        Name: inputs["Name"].value,
        UserName: inputs["UserName"].value,
        Password: inputs["Password"].value

    }

    

    const url = "http://localhost:3000/User"
    const header = {
        'Content-type': 'application/json'
    }

    const configuration = {
        method: "POST",
        body: JSON.stringify(Usuario),
        headers: header
    }

    fetch(url, configuration).then(response =>{
        return response.json()
    })
    .then(Usuario =>{
        console.log(Usuario)
        alert("Registrado correctamente")
        window.history.back()
    })
}

registerform.addEventListener("submit", GuardarUsuario)