
const elementoListado = document.querySelector("#listado-clientes")


window.addEventListener("load", event=> {
    const id = getParam("id");
    const UserNameTag = document.querySelector("#a-nombre");
    const ainteraction = document.querySelector("#a-interaccion")
    const aAgregar = document.querySelector("#a-agregar")

    callAPI(`${url2}/${id}`, "GET", {}).then(usuarios => {
        alert(`Bienvenido ${usuarios.Name}`)
        UserNameTag.textContent = usuarios.Name;
        UserNameTag.href =`/UserProfile?id=${usuarios.id}`
        ainteraction.href = `/Interacciones?id=${usuarios.id}`
        aAgregar.href = `/AgregarCliente?id=${usuarios.id}`



        
    callAPI(url, "GET", {}).then( clientes => {
        callAPI(`${url2}/${id}`, "GET", {}).then( usuarios =>{
            clientes.forEach(cliente => {
                const elemtPost1 = document.createElement("ul")
                const buttonInteract = document.createElement("a")
                elemtPost1.classList.add("list-group", "list-group-flush" , "mt-2", "flex-fill")
                const elemtPost = document.createElement("li")
                elemtPost.classList.add("list-group-item")
                const link = document.createElement("a")
                const buttonBorrar = document.createElement("button")
                buttonBorrar.classList.add("btn","btn-danger", "btn-lg")
                buttonBorrar.textContent = "Borrar"
                buttonInteract.classList.add("btn","btn-success", "btn-lg")
                buttonInteract.textContent = "Interacción"
                buttonInteract.href = `CrearInteraccion?id=${usuarios.id}&Cliente?id=${cliente.id}`
                agregarEventoBorrarCliente(buttonBorrar, cliente)
                link.classList.add("fw-bold")
                link.href = `Editar?id=${usuarios.id}&Cliente?id=${cliente.id}`
                link.textContent = `Id: ${cliente.id} | Nombre: ${cliente.name}.`
                elemtPost.appendChild(link)
                elemtPost1.appendChild(elemtPost)
                elementoListado.appendChild(elemtPost1)
                elemtPost1.appendChild(buttonBorrar)
                elemtPost1.appendChild(buttonInteract)
        } )

        
        });
    })
    
    })










})



function agregarEventoBorrarCliente(button, cliente) {
    button.addEventListener("click", event=> {
        if(confirm(`Desea borrar el cliente ${cliente.name}?`)) {
            callAPI(`${url}/${cliente.id}`, "DELETE", {})
            .then( ()=> window.location.reload())
        }
    })
}