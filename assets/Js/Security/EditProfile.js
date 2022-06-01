window.addEventListener("load", event=> {
    const iduser = getParam("User?id")
    const id = getParam("id");
 callAPI(`${url2}/${id}`, "GET", {}).then(usuario =>{
     callAPI(`${url4}/${iduser}`,  "GET", {}).then(interaction => {
        const editform = document.querySelector(".user-editform")
        editform.elements["id"].value = usuario.id;
        editform.elements["Name"].value = usuario.Name;
        editform.elements["UserName"].value = usuario.UserName;
        editform.elements["Password"].value = usuario.Password;
    
        console.log(interaction.user)
        
        function ActualizarUsuario(event){
            event.preventDefault();
            const inputs = event.target.elements;
            const User = {
                Name: inputs["Name"].value,
                UserName: inputs["UserName"].value,
                Password: inputs["Password"].value,
            }
            const Interaction = {
                note: interaction.note,
                createdAt: interaction.createdAt,
                user: User,
                customer: interaction.customer
            }
    
        callAPI(`${url2}/${usuario.id}`, "PUT", User)
        callAPI(`${url4}/${iduser}`, "PUT", Interaction)
      
    
        alert("Usuario actualizado")
        location.href = `/UserProfile?id=${usuario.id}`
        }
        editform.addEventListener("submit", ActualizarUsuario)
     
    
     })
    
 })})


