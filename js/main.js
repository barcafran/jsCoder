console.log("Iniciando...");
/* var tuNombre = prompt('Hola, ingresá tu nombre y apellido:');
var holaUsuario = '¡Bienvenido/a a Mística, ' + tuNombre + '!'; 
alert (holaUsuario);
 */

$(document).ready(function() 
{
   console.log( "El DOM esta listo" );
});


class pizza {
    constructor(tipo, precio, ingredientes) {
        this.tipo = tipo;
        this.precio = precio;
        this.ingredientes = ingredientes;
    }
} 

const lomi = new pizza("Lomipizza $", 800, ": Lomito a la pizza");
const napoJ = new pizza("Napolitana con jamon $", 680, ": Salsa de tomates, muzarella, tomate en rodajas y provenzal.");
const palmito = new pizza("Palmito $", 700, ": Jamón, huevo, palmitos y salsa golf");
const cuatroQ = new pizza("Cuatro quesos $", 700, ": Dambo, roquefort, muzzarella y tybo");
const jamon = new pizza("Jamon $", 600, ": Muzzarella con jamon");
let pedido = [];

let lomiBtn = $("#lomipizza");
let cuatroQBtn = $("#cuatroQ");
let jamonBtn = $("#jamon");
let palmitoBtn = $("#palmito");
let napoJBtn = $("#napoJ");
let carritoUsuario = $("#carritoUsuario");

const addItemHandler = (event) => {
    const itemId = event.target.id;
    let pizzaSelec;
    switch (itemId) {
        case "lomipizza": 
            pizzaSelec = lomi;
            break;
        case "cuatroQ": 
            pizzaSelec = cuatroQ;
            break;
        case "jamon": 
            pizzaSelec = jamon;
            break;
        case "napoJ": 
            pizzaSelec = napoJ;
            break;
        case "palmito": 
            pizzaSelec = palmito;
            break;        
    }
    pedido.push(pizzaSelec);
    const liElement = document.createElement("li");
    liElement.innerText = pizzaSelec.tipo + pizzaSelec.precio + pizzaSelec.ingredientes;
    carritoUsuario.append(liElement);
}

lomiBtn.on("click",addItemHandler);
napoJBtn.click(addItemHandler);
palmitoBtn.click(addItemHandler);
cuatroQBtn.click(addItemHandler);
jamonBtn.click(addItemHandler);

$(".limpiarBtn").click(limpia);
function limpia () {
    carritoUsuario.empty(``);
}

$(".confirmarBtn").click(confirma);
function confirma () {
    carritoUsuario.append(`<li><b>Total</b> $ ${carritoUsuario.precio}</li>`);
}

console.log("Finalizado.");