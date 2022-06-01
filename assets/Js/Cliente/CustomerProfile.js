
window.addEventListener("load", event=> {
    const id = getParam("id");
    const elementoListado = document.querySelector("#listado-cliente")
    const alistar = document.querySelector("#a-Listar-Clientes")

    callAPI(`${url2}/${id}`, "GET", {}).then(usuarios => {
        alistar.href = `/Interacciones?id=${usuarios.id}`
    })

    callAPI(`${url}/${id}`, "GET", {}).then(Cliente => {


        if(Cliente.id === undefined){
            alert("Este usuario no existe o ha sido eliminado")
            window.history.back()
        }
            const th = document.createElement("th")
                const tr = document.createElement("tr")
                th.textContent = Cliente.id
                const tdNombre = document.createElement("td")
                tdNombre.textContent = Cliente.name
                const tdEmail = document.createElement("td")
                tdEmail.textContent = Cliente.email
                const tdDireccion = document.createElement("td")
                tdDireccion.textContent = Cliente.address
                const tdFecha = document.createElement("td")
                tdFecha.textContent = Cliente.createdAt
                
                tr.appendChild(th)
                tr.appendChild(tdNombre)
                tr.appendChild(tdEmail)
                tr.appendChild(tdDireccion)
                tr.appendChild(tdFecha)
                elementoListado.appendChild(tr)
    })
})



