const idUser = getParam("id");
const idCustom = getParam("Cliente?id")
const idInteract = getParam("id")
const elementoListado = document.querySelector("#listado-interaccion")
const aListaClien = document.querySelector("#a-Listar-Clientes")

window.addEventListener("load", event=> {
        callAPI(`${url4}`, "GET", {}).then( Interactions =>{
            Interactions.forEach(interactions => {
                const th = document.createElement("th")
                const tr = document.createElement("tr")
                const tdid = document.createElement("td")
                const auser = document.createElement("a")
                const acust = document.createElement("a")
                th.textContent = interactions.id
                const tdNote = document.createElement("td")
                tdNote.textContent = interactions.note
                const tdFecha = document.createElement("td")
                tdFecha.textContent = interactions.createdAt
                const tdUser = document.createElement("td")
                auser.textContent = interactions.user.Name
                auser.href = `UserProfile?id=${interactions.user.id}&User?id=${interactions.id}`
                const tdCliente = document.createElement("td")
                acust.textContent = interactions.customer.name
                acust.href = `CustomerProfile?id=${interactions.customer.id}`
                const tdEditar = document.createElement("td")
                const tdEliminar = document.createElement("td")
                const link = document.createElement("a")
                const buttonBorrar = document.createElement("button")
                buttonBorrar.classList.add("btn","btn-danger", "btn-lg")
                buttonBorrar.textContent = "Borrar"
                agregarEventoBorrarInteraccion(buttonBorrar, interactions)
                const buttonEdit = document.createElement("a")
                buttonEdit.classList.add("btn","btn-success", "btn-lg")
                buttonEdit.textContent = "Editar"
                buttonEdit.href = `EditarInteraccion?id=${interactions.id}`
                tdUser.appendChild(auser)
                tdCliente.appendChild(acust)                  
                tr.appendChild(th)
                tr.appendChild(tdNote)
                tr.appendChild(tdFecha)
                tr.appendChild(tdUser)
                tr.appendChild(tdCliente)
                tr.appendChild(tdEditar)
                tr.appendChild(tdEliminar)
                elementoListado.appendChild(tr)
                tdEliminar.appendChild(buttonBorrar)
                tdEditar.appendChild(buttonEdit)
                
        })
        callAPI(`${url2}`, "GET", {}).then(usuarios => {
            aListaClien.href = `/Listado?id=${usuarios.id}`
        })
        debugger;
    })
})



function agregarEventoBorrarInteraccion(button, interactions) {
    button.addEventListener("click", event=> {
        if(confirm(`Desea borrar el cliente ${interactions.note}?`)) {
            callAPI(`${url4}/${interactions.id}`, "DELETE", {})
            .then( ()=> window.location.reload())
        }
    })
}