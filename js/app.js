
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
const dolar = new Moneda ("Dolar", "EEUU", 95.52);
const libra = new Moneda ("Libra", "Reino Unido", 132.47);
const yenJapones = new Moneda ("Yen japonés", "Japon", 0.86);
const monedas = [dolar,libra,yenJapones];

const santi = new Usuario ("santi", "santi@gmail.com", 1000);
const gero  = new Usuario ("gero", "gero@gmail.com", 8000);
const mati  = new Usuario ("mati", "mati@gmail.com", 5000);
const juan  = new Usuario ("juan", "juani@gmail.com", 0);


let usuarioNombre = prompt("Ingrese su nombre");
let usuarioMail =  prompt("Ingrese su mail");
let usuarioPlata = Number( prompt("Ingrese su plata"));
const usuarioNuevo = new Usuario (usuarioNombre,usuarioMail,usuarioPlata);

const usuarios = [usuarioNuevo,santi,gero,mati,juan];

dolar.consultar(100);
libra.consultar(100);
yenJapones.consultar(100);

juan.ingresarPlata(2000);
const prestamo1 = new Prestamo ("500");
prestamo1.sumarInteres();
prestamo1.aprobarPrestamo();
console.log(prestamo1);

let deMasRicoAMasPobre = usuarios.sort(function(a,b){
    return b.plata - a.plata;
})
console.log(deMasRicoAMasPobre);

let nombreConsulta = prompt("Ingrese el nombre para consultar el saldo");
const buscarSaldo = (cliente) => {
    let clienteEncontrado = usuarios.find(usuarios => usuarios.nombreApellido == cliente);
    if(clienteEncontrado){
        console.log(`el usuario ${clienteEncontrado.nombreApellido} tiene ${clienteEncontrado.plata}`);
    }else{
        console.log(`No existe ese usuario`);
    }
} 
buscarSaldo(nombreConsulta);