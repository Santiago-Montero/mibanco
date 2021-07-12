class Moneda{
    constructor(nombreMoneda,origen,ventaPorPeso,compraPorElPeso){
        this.nombreMoneda = nombreMoneda;
        this.origen = origen;
        this.ventaConElPeso = ventaPorPeso;
        this.compraConElPeso = compraPorElPeso;
    }
    venta(monto){
        let total = monto * this.ventaPorPeso ;
        console.log(`${monto} serian ${total} en la moneda ${this.nombreMoneda}`)
    }
    compra(monto){
        let total = monto * this.compraPorElPeso ;
        console.log(`${monto} en ${this.nombreMoneda} serian ${total} pesos`)
    }
}
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
    msjBienvenida(){
        alert(`Tus datos se guardaron correctamente `+ this.nombre);
    }
}
class Prestamo{
    constructor(plataPedida){
        this.plataPedida = parseFloat(plataPedida);
        this.aprobado = false;
    }
    sumarInteres() {
        this.plataPedida = this.plataPedida + (this.plataPedida * 0.3) ;
    }
    aprobarPrestamo() {
        this.aprobado = true;
    }
}

const dolar = new Moneda ("Dolar", "EEUU", 95.52, 90);
const libra = new Moneda ("Libra", "Reino Unido", 132.47, 127);
const yenJapones = new Moneda ("Yen japonés", "Japon", 0.86, 0.40);
const monedas = [dolar,libra,yenJapones];

const santi = new Usuario ("santi","santi", "santi@gmail.com", 1000);
const gero  = new Usuario ("gero","gero", "gero@gmail.com", 8000);
const mati  = new Usuario ("mati","mati", "mati@gmail.com", 5000);
const juan  = new Usuario ("juan","juan", "juani@gmail.com", 5);

let botonInicioS = document.getElementById("btnInicioSesion");

if (botonInicioS){
    botonInicioS.addEventListener("click", mostrar);
}

function mostrar(e) {
    e.preventDefault()
    let nombre = document.getElementById("nombre").value
    let apellido = document.getElementById("apellido").value
    let mail = document.getElementById("mail").value
    guardarDatos(nombre, apellido, mail)
    alert(`Muchas gracias ${nombre} ${apellido} te registrate con el mail ${mail}`);
}
function guardarDatos(nombre, apellido, mail) {
    const nuevoUsu = new Usuario (nombre, apellido, mail, 0)
    localStorage.setItem("usuarioNuevo", JSON.stringify(nuevoUsu))
}
let datosUsu = JSON.parse(localStorage.getItem("usuarioNuevo"))

const usuarios = [santi,gero,mati,juan,datosUsu];

// banco Vende
dolar.venta(100);
libra.venta(100);
yenJapones.venta(100);
//banco Compra
dolar.compra(100);
libra.compra(100);
yenJapones.compra(100);

juan.ingresarPlata(2000);
const prestamo1 = new Prestamo ("500");
prestamo1.sumarInteres();
prestamo1.aprobarPrestamo();
console.log(prestamo1);

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
let mostrarHisotrial = document.getElementById("btnMostrarHistorial");
if (mostrarHisotrial){
    mostrarHisotrial.addEventListener("click", mostrarHistorial);
}
function mostrarHistorial(){
    document.getElementById("usuarioHistorial").style.display = "block"
    let infoUsuario = document.getElementById("usuarios");
    for (const usu of usuarios){
        let contenedor = document.createElement("tr");
        contenedor.innerHTML = `<td>${usu.nombre}</td> 
                                <td>${usu.apellido}</td> 
                                <td>${usu.mail}</td> 
                                <td>${usu.plata}</td>`
        infoUsuario.appendChild(contenedor);
    }
}


