const anombre = document.querySelector("#a-nombre")
window.addEventListener("load", event=> {
    const idCliente = getParam("Cliente?id");
    const id = getParam("id")
    callAPI(`${url2}/${id}`, "GET", {}).then(usuarios => {
        anombre.href = `/Listado?id=${usuarios.id}`
    })

 callAPI(`${url}/${idCliente}`, "GET", {}).then(cliente =>{
    const clienteform = document.querySelector(".cliente-form")

    clienteform.elements["id"].value = cliente.id;
    clienteform.elements["Name"].value = cliente.name;
    clienteform.elements["Email"].value = cliente.email;
    clienteform.elements["Address"].value = cliente.address;
    clienteform.elements["CreatedAt"].value = cliente.createdAt;


    function ActualizarCliente(event){
        event.preventDefault();
        const inputs = event.target.elements;
        const Customer = {
            name: inputs["Name"].value,
            email: inputs["Email"].value,
            address: inputs["Address"].value,
            createdAt: inputs["CreatedAt"].value
        }

    callAPI(`${url}/${cliente.id}`, "PUT", Customer)

    alert("Cliente actualizado")
    location.href = `/Listado?id=${id}`
}
    clienteform.addEventListener("submit", ActualizarCliente)

 })})





