class Prestamo{
    constructor(plataPedida, usuario){
        this.usuario = usuario;
        this.plataPedida = parseFloat(plataPedida);
        this.aprobado = false;
        this.interes = 0;
    }
    sumarInteres() {
        this.usuario.plata += this.plataPedida
        this.plataPedida = this.plataPedida
        this.interes = this.interes + this.plataPedida + (this.plataPedida * 0.3)
        this.aprobado = true;
    }
}


let btnPedirPrestamo = document.getElementById("btnPedirPrestamo");
if(btnPedirPrestamo){
    btnPedirPrestamo.addEventListener("click", pedirPrestamo);
}
function pedirPrestamo(){
    let montoPrestamo = document.getElementById("montoPrestamo").value;
    let nuevoPrestamo = new Prestamo(montoPrestamo, datosUsu);
    nuevoPrestamo.sumarInteres();
    console.log(nuevoPrestamo);
}
