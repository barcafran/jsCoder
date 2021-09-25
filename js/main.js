console.log("Iniciando...");
/*var tuNombre = prompt('Hola, ingresá tu nombre y apellido:');
var holaUsuario = '¡Bienvenido/a a Mística, ' + tuNombre + '!'; 
alert (holaUsuario);*/

$(document).ready(function() {


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

lomiBtn.click(addItemHandler);
napoJBtn.click(addItemHandler);
palmitoBtn.click(addItemHandler);
cuatroQBtn.click(addItemHandler);
jamonBtn.click(addItemHandler);


$(".limpiarBtn").click(limpia);
function limpia () {
    carritoUsuario.empty(``);
    $('.confirmarBtn').show();
    $('.pedir').hide();
};

$(".confirmarBtn").click(confirma);
function confirma () {
    carritoUsuario.append(`<li><b>Total</b> $${carritoUsuario.precio}</li>`);
};

$(".confirmarBtn").click(pedir);
function pedir () {
    $(".carrito").fadeIn(apendeado)
    
    function apendeado () {
        $(".carrito").append(`<button class="pedir">
                            <a href="https://api.whatsapp.com/send?phone=03446664478&text=${carritoUsuario}">
                                Confirmar
                            </a>
                        </button>`)
    }
    $('.confirmarBtn').hide();
};

//SUMAR AJAX AL BOTON DE PEDIR

const URLGET   = "../index.html";

const pedidoWsp =  stringify(carritoUsuario)


$(".pedir").click(() => { 
    $.post(URLGET, infoPost ,(respuesta, estado) => {
        if (estado === "success"){
            $("body").prepend(`<div>
                Pedido enviado:${respuesta.nombre}
                </div>`);
        }  
    });
});



console.log( "El DOM esta listo" );
});

console.log("Finalizado.");