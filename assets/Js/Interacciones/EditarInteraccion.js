//Declaracion de variables globales del DOM
const interactionform = document.querySelector(".interaction-form")
const selectcustomer = document.querySelector("#Customer")

//Reload de la pagina
window.addEventListener("load", event=> {
    const id = getParam("id");
//Llamada del API interaciones para editar los datos del API
 callAPI(`${url4}/${id}`, "GET", {}).then(interaction =>{
    interactionform.elements["id"].value = interaction.id;
    interactionform.elements["Note"].value = interaction.note;
    interactionform.elements["CreatedAt"].value = interaction.createdAt;
    interactionform.elements["User"].value = interaction.user;
    console.log(interaction.customer)
//Llamada del API cliente para la participacion del nombre del cliente en interacciones
    callAPI(`${url}`, "GET", {}).then(clientes =>{
//Foreach para recorrer el API cliente
        clientes.forEach(cliente => {
//Creacion de las options del select donde estaran los nombres del cliente
            const opciones = document.createElement("option")
            opciones.value = cliente.id
            opciones.appendChild(document.createTextNode(cliente.name))
    
            selectcustomer.appendChild(opciones)
            interactionform.appendChild(selectcustomer)


    })
    const divbutton = document.createElement("div")
    const buttonsend = document.createElement("button")
    buttonsend.classList.add("btn", "btn-primary" , "mt-3")
    buttonsend.textContent = "Enviar"
    divbutton.appendChild(buttonsend)
    interactionform.appendChild(divbutton)
    
    })
//Funcion editar
    function ActualizarInteraccion(event){
        event.preventDefault();
//Se almacena el id del customer seleccionado en el select en la variable "idcust"
        const idcust = interactionform.elements["Customer"].value
//Se llama el API cliente para utilizar el idcust y poder seleccionar el cliente que se requiere
        callAPI(`${url}/${idcust}`, "GET", {}).then(Customer =>{
//Se llama el API interacciones para lograr el edittado
            callAPI(`${url4}/${id}`, "GET", {}).then(interactions =>{
            const inputs = event.target.elements;
            const interaccion = {
                note: inputs["Note"].value,
                createdAt: inputs["CreatedAt"].value,
                user: interaction.user,
                customer: Customer
            }
//Se envian los datos modificados al API 
            callAPI(`${url4}/${interaction.id}`, "PUT", interaccion)
            alert("Se ha actualizado la interacción")
            location.href = "Interacciones"
            
        })
    })
}
    
//Funcion para dar paso a las funciones del API
    interactionform.addEventListener("submit", ActualizarInteraccion)
 })})









