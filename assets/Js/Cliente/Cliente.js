const clienteform = document.querySelector(".cliente-form")
const id = getParam("id")
const anombre = document.querySelector("#a-nombre")
window.addEventListener("load", event=> {

    callAPI(`${url2}/${id}`, "GET", {}).then(usuarios => {
        anombre.href = `/Listado?id=${usuarios.id}`
    })
})

function GuardarCliente(event){
    event.preventDefault();
    const inputs = event.target.elements;
    const cliente = {
        name: inputs["Name"].value,
        email: inputs["Email"].value,
        address: inputs["Address"].value,
        createdAt: inputs["CreatedAt"].value
    }

    const url = "http://localhost:3000/Customer"
    const header = {
        'Content-type': 'application/json'
    }
    const configuration = {
        method: "POST",
        body: JSON.stringify(cliente),
        headers: header
    }

    fetch(url, configuration).then(response =>{
        return response.json()
    })
    .then(cliente =>{
       alert("El usuario se ha agregado correctamente")
       window.location = ``
    })

}

clienteform.addEventListener("submit", GuardarCliente)
