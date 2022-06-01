
const userform = document.querySelector(".User-login")



function ProbarAPI(event){
    event.preventDefault();
    const inputslog = event.target.elements;
    const log = {
        User: inputslog["User"].value,
        Password: inputslog["Password"].value
    }
    callAPI(`${url2}/?UserName=${log.User}`, "GET", {}).then( usuarios => {
       console.log(usuarios)
        if(usuarios.length==0){
           alert("Usuario no existe")
       }
       else{
           if(usuarios[0].Password!=log.Password){
               alert("Contraseña incorrecta")
           }
           else{
            window.location = `Listado?id=${usuarios[0].id}`
           }
       }
    
    });
    
}

userform.addEventListener("submit", ProbarAPI)