const interactform = document.querySelector(".interaction-form")
const idUser = getParam("id");
const idCustom = getParam("Cliente?id")

callAPI(`${url}/${idCustom}`, "GET", {}).then( clientes =>{
    callAPI(`${url2}/${idUser}`, "GET", {}).then( usuarios =>{

    })
})



function GuardarInteraccion(event){
    event.preventDefault();
    callAPI(`${url}/${idCustom}`, "GET", {}).then( clientes =>{
        callAPI(`${url2}/${idUser}`, "GET", {}).then( usuarios =>{
            const inputs = event.target.elements
            const interaccion = {
                note: inputs["Note"].value,
                createdAt: inputs["CreatedAt"].value,
                user: usuarios,
                customer: clientes
            }

            const url3 = "http://localhost:3000/Interaction";
            const header = {
                'Content-type': 'application/json'
            }
            const configuration = {
                method: "POST",
                body: JSON.stringify(interaccion),
                headers: header
            }
        
            fetch(url3, configuration).then(response =>{
                return response.json()
            })
            .then(interaccion =>{
                console.log(interaccion)
            })
            // callAPI("http://localhost:3000/Interacciones", "POST", interaccion )
            // console.log(interaccion)

            alert("Interaccion agregada correctamente")
            window.history.back();

        })
    })
    



}

interactform.addEventListener("submit", GuardarInteraccion)
