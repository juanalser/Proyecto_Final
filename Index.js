const express = require('express'); 

const app = express()

app.use(express.static('assets'));
app.use(express.static('node_modules'));
app.get('/', function(req, res){
    res.sendFile(__dirname + "/Index.html")
})

app.get('/Editar', function(req, res){
    res.sendFile(__dirname + "/Views/EditarCliente.html")
})

app.get('/Listado', function(req, res){
    res.sendFile(__dirname + "/Views/ListadoCliente.html")
})

app.get('/AgregarCliente', function(requ,res){
    res.sendFile(__dirname + "/Views/AgregarCliente.html")
})

app.get('/Registrar', function(requ,res){
    res.sendFile(__dirname + "/Views/Registrar.html")
})

app.get('/UserProfile', function(requ,res){
    res.sendFile(__dirname + "/Views/UserProfile.html")
})

app.get('/CustomerProfile', function(requ,res){
    res.sendFile(__dirname + "/Views/CustomerProfile.html")
})

app.get('/Interacciones', function(requ,res){
    res.sendFile(__dirname + "/Views/Interacciones.html")
})

app.get('/CrearInteraccion', function(requ,res){
    res.sendFile(__dirname + "/Views/CrearInteraccion.html")
})

app.get('/EditarInteraccion', function(requ,res){
    res.sendFile(__dirname + "/Views/EditarInteraccion.html")
})

app.get('/EditarProfile', function(requ,res){
    res.sendFile(__dirname + "/Views/EditProfile.html")
})


app.listen(3200);
console.log("Express esta funcionando en el puerto: 3200");
console.log("http://localhost:3200");


