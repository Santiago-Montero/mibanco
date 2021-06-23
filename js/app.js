
//animacion- barra lateral
const btnToggle = document.querySelector('.toggle-btn');

btnToggle.addEventListener('click', function () {
    console.log('clik')
    document.getElementById('sidebar').classList.toggle('active');
    console.log(document.getElementById('sidebar'))
});
//

class Usuario{
    constructor(nombreApellido, mail) {
        this.nombreApellido = nombreApellido;
        this.mail = mail;
    }
    msjBienvenida(){
        alert(`Tus datos se guardaron correctamente `+ this.nombreApellido);
    }
}
// const usuario1 = new Usuario ("Santi Montero", "santi@gmail.com");
// usuario1.msjBienvenida();

let usuarioNombre = prompt("Ingrese su nombre");
let usuarioMail = prompt("Ingrese su mail");
const usuarioNuevo = new Usuario (usuarioNombre,usuarioMail);
console.log(usuarioNuevo);

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

const prestamo1 = new Prestamo ("500");
prestamo1.sumarInteres();
prestamo1.aprobarPrestamo();
console.log(prestamo1);