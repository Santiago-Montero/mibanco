class Usuario{
    constructor(nombre, apellido, mail, plata) {
        this.nombre = nombre;
        this.apellido = apellido
        this.mail = mail;
        this.plata = plata;
    }
    ingresarPlata(monto){
        this.plata = this.plata + monto;
    }
}

const santi = new Usuario ("santi","santi", "santi@gmail.com", 1000);
const gero  = new Usuario ("gero","gero", "gero@gmail.com", 8000);
const mati  = new Usuario ("mati","mati", "mati@gmail.com", 5000);
const juan  = new Usuario ("juan","juan", "juani@gmail.com", 5);

let botonInicioS = $("#btnInicioSesion");
if (botonInicioS[0]){
    botonInicioS[0].addEventListener("click", mostrar);
}
function guardarDatos(nombre, apellido, mail) {
    const nuevoUsu = new Usuario (nombre, apellido, mail, 0)
    localStorage.setItem("usuarioNuevo", JSON.stringify(nuevoUsu))
}
function mostrar(e) {
    e.preventDefault()
    let nombre = $("#nombre").val()
    let apellido = $("#apellido").val()
    let mail = $("#mail").val()
    guardarDatos(nombre, apellido, mail)
    alert(`Muchas gracias ${nombre} ${apellido} te registrate con el mail ${mail}`);
}
let datosUsu = JSON.parse(localStorage.getItem("usuarioNuevo"));

const usuarios = [santi,gero,mati,juan,datosUsu];


$("#btnMostrarHistorial").click(function mostrarHistorial(){
    $("#usuarioHistorial").show()
    console.log("hola");
    for (const usu of usuarios){
    $("#usuarios").append( `<tr>
                            <td>${usu.nombre}</td> 
                            <td>${usu.apellido}</td> 
                            <td>${usu.mail}</td> 
                            <td>${usu.plata}</td>
                            </tr>`
    );}    
});

// ORDENAR DE MAS PLATA A MENOS
// let deMasRicoAMasPobre = usuarios.sort(function(a,b){
//     return b.plata - a.plata;
// })
// console.log(deMasRicoAMasPobre);


// BUSCAR USUARIO
//let nombreConsulta = prompt("Ingrese el nombre del usuario para venta el saldo");
// const buscarSaldo = (cliente) => {
//     let clienteEncontrado = usuarios.find(usuarios => usuarios.nombreApellido == cliente);
//     if(clienteEncontrado){
//         console.log(`el usuario ${clienteEncontrado.nombreApellido} tiene ${clienteEncontrado.plata}`);
//     }else{
//         console.log(`No existe ese usuario`);
//     }
// } 
// buscarSaldo(nombreConsulta);

