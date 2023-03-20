//USUARIO REGISTRADO PARA ACCEDER AL LISTADO DE PRODUCTOS REDIRECCIONARIA A ZONA EXCLUSIVA (la idea es dispararlo desde el boton)
let pass = 1234;
let dato = parseInt(prompt("Ingrese su clave para acceder al listado"));
let intentos = 3;

while (dato != pass && intentos > 0 ) {
intentos--;
    alert(`la clave es incorrecta, te quedan ${intentos} intentos`);
        if (intentos != 0) {
    dato = parseInt(prompt("Ingrese nuevamente su clave"));
   }
}



//SWITCH PARA ELEGIR MODELO

//switch (variable a evaluar) {
//    case "valor":
//            codigo
// }

let codigoProducto = prompt("Ingrese el código del producto elegido:CS (Single), CQ (Queen), CK (King)");

switch (codigoProducto) {
     case "CS":
         alert("Colchón Single Precio: $25.000");
         break;
     case "CQ":
         alert("Colchón Queen Precio: $45.000");
       break;
    case "CK":
         alert("Colchón King Precio: $65.000");
         break;
     default:
         alert("Ese modelo no existe, consúltenos en el formulario de contacto");
         break;
 }

 
