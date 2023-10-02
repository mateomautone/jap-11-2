function enviarDatos(){
    let fname = document.getElementById('fname').value
    let lname = document.getElementById('lname').value
    let fnac = document.getElementById('fnac').value
    jsonAEnviar = JSON.stringify({ nombre: fname, apellido: lname, fechanacimientl: fnac})
    // console.log(jsonAEnviar)
    const options = {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: jsonAEnviar,
    };
    fetch('https://jsonplaceholder.typicode.com/users', options)
    .then(response => response.json())
    .then(data => console.log(data))
}

document.getElementById('enviar').addEventListener("click", enviarDatos)