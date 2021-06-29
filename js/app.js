
//animacion- barra lateral
const btnToggle = document.querySelector('.toggle-btn');

btnToggle.addEventListener('click', function () {
    console.log('clik')
    document.getElementById('sidebar').classList.toggle('active');
    console.log(document.getElementById('sidebar'))
});
//
class Moneda{
    constructor(nombreMoneda,origen,cambioConElPeso){
        this.nombreMoneda = nombreMoneda;
        this.origen = origen;
        this.cambioConElPeso = cambioConElPeso;
    }
    consultar(monto){
        let total = monto * this.cambioConElPeso ;
        console.log(`${monto} serian ${total} en la moneda ${this.nombreMoneda}`)
    }
}


const dolar = new Moneda ("Dolar", "EEUU", 95.52);
const libra = new Moneda ("Libra", "Reino Unido", 132.47);
const yenJapones = new Moneda ("Yen japonés", "Japon", 0.86);

dolar.consultar(100);
libra.consultar(100);
yenJapones.consultar(100);

const monedas = [dolar,libra,yenJapones];


class Usuario{
    constructor(nombreApellido, mail, plata) {
        this.nombreApellido = nombreApellido;
        this.mail = mail;
        this.plata = plata;
    }
    ingresarPlata(monto){
        this.plata = this.plata + monto;
    }
    msjBienvenida(){
        alert(`Tus datos se guardaron correctamente `+ this.nombreApellido);
    }
}
// const usuario1 = new Usuario ("Santi Montero", "santi@gmail.com");
// usuario1.msjBienvenida();

let usuarioNombre = prompt("Ingrese su nombre");
let usuarioMail =  prompt("Ingrese su mail");
let usuarioPlata = Number( prompt("Ingrese su plata"));
const usuarioNuevo = new Usuario (usuarioNombre,usuarioMail,usuarioPlata);
console.log(usuarioNuevo);

const santi = new Usuario ("santi", "santi@gmail.com", 1000);
const gero = new Usuario ("gero", "gero@gmail.com", 8000);
const mati= new Usuario ("mati", "mati@gmail.com", 5000);
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

usuarioNuevo.ingresarPlata(2000);
console.log(usuarioNuevo);
const prestamo1 = new Prestamo ("500");
prestamo1.sumarInteres();
prestamo1.aprobarPrestamo();
console.log(prestamo1);

const usuarios = [usuarioNuevo,santi,gero,mati];
console.log(usuarios);

let deMasRicoAMasPobre = usuarios.sort(function(a,b){
    return b.plata - a.plata;
})
console.log(deMasRicoAMasPobre);

let nombreUsuario = prompt("Cuanta plata tiene el usuario : ");
const buscarA = (nombreDelCliente) =>{
    let a = usuarios.find(usuarios => usuarios.nombreApellido == nombreDelCliente);
    console.log(a.plata);
} 
buscarA(nombreUsuario);