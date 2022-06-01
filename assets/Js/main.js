const url = "http://localhost:3000/Customer"
const url2 = "http://localhost:3000/User"
const url4 = "http://localhost:3000/Interaction"

function getParam(param){
    const params = new URLSearchParams(location.search)
    return params.get(param)
}

function callAPI(url, method, data){
    let configuration = {}
    const header = {
        'Content-type': 'application/json'
    }
   if(method === "GET"){
         configuration = {
        method: method,
        headers: header
    }
   }
   else{
         configuration = {
        method: method,
        body: JSON.stringify(data),
        headers: header
    }
   }

    return fetch(url, configuration).then(response =>{
        return response.json()
    })
    
    
}



