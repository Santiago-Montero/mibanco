class Moneda{
    constructor(nombreMoneda,origen,ventaConElPeso,compraConElPeso){
        this.nombreMoneda = nombreMoneda;
        this.origen = origen;
        this.ventaConElPeso = ventaConElPeso;
        this.compraConElPeso = compraConElPeso;
    }
    venta(monto){
        let total = monto * this.ventaConElPeso ;
        console.log(`${monto} serian ${total} en la moneda ${this.nombreMoneda}`)
    }
    compra(monto){
        let total = monto * this.compraConElPeso ;
        console.log(`${monto} en ${this.nombreMoneda} serian ${total} pesos`)
    }
}

const dolar = new Moneda ("Dolar", "EEUU", 95.52, 90);
const libra = new Moneda ("Libra", "Reino Unido", 132.47, 127);
const yenJapones = new Moneda ("Yen japonés", "Japon", 0.86, 0.40);
const monedas = [dolar,libra,yenJapones];

let monedaContenedor = document.getElementById("monedas");
for(const moneda of monedas){
    let contenedor = document.createElement("div");
    contenedor.innerHTML = `<h3>${moneda.nombreMoneda}</h3>
                            <p> Compra: $ <b>${moneda.compraConElPeso}</b></p>
                            <p> Venta: $ <b>${moneda.ventaConElPeso}</b></p>`
    console.log(contenedor);
    monedaContenedor.appendChild(contenedor);
}

// banco Vende
dolar.venta(100);
libra.venta(100);
yenJapones.venta(100);
//banco Compra
dolar.compra(100);
libra.compra(100);
yenJapones.compra(100);
