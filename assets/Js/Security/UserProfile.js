window.addEventListener("load", event=> {



    const iduser = getParam("User?id")
    const id = getParam("id");
    const elementoListado = document.querySelector("#listado-user")
    const aListaClien = document.querySelector("#a-Listar-Clientes")
    const editDelet = document.querySelector("#edit-Delete")

    callAPI(`${url2}/${id}`, "GET", {}).then(Usuarios => {
        const th = document.createElement("th")
                const tr = document.createElement("tr")
                th.textContent = Usuarios.id
                const tdNombre = document.createElement("td")
                tdNombre.textContent = Usuarios.Name
                const tdUserName = document.createElement("td")
                tdUserName.textContent = Usuarios.UserName

                const buttedit = document.createElement("a")
                buttedit.href = `/EditarProfile?id=${Usuarios.id}&User?id=${iduser}`
                buttedit.classList.add("btn", "btn-success")
                buttedit.textContent = "Editar"
                const buttonBorrar = document.createElement("button")
                buttonBorrar.classList.add("btn","btn-danger", "ms-2")
                buttonBorrar.textContent = "Eliminar este usuario"
                agregarEventoBorrarUsuario(buttonBorrar, Usuarios)
                tr.appendChild(th)
                tr.appendChild(tdNombre)
                tr.appendChild(tdUserName)
                editDelet.appendChild(buttedit)
                editDelet.appendChild(buttonBorrar)
                elementoListado.appendChild(tr)
                aListaClien.href = `/Listado?id=${Usuarios.id}`
    })
    
})


function agregarEventoBorrarUsuario(button, usuario) {
    button.addEventListener("click", event=> {
        if(confirm(`Desea borrar el cliente ${usuario.Name}?`)) {
            callAPI(`${url2}/${usuario.id}`, "DELETE", {})
            .then( ()=> window.location = `/`)
        }
    })
}

