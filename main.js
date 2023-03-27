//USUARIO REGISTRADO PARA ACCEDER AL LISTADO DE PRODUCTOS REDIRECCIONARIA A ZONA EXCLUSIVA (la idea es dispararlo desde un botón- Agregue dos botones abajo para otras funciones pero no estan aplicadas, esta mal? )

let pass = 1234;
let intentos = 3;
let ingreso = false;

alert("Bienvenidos a Colchon in a Box zona PRODUCTOS ");

for (let i = 1; i <= intentos; i++) {
    let dato = parseInt(prompt("Ingrese su clave para acceder al listado (Intento " + i + " de " + intentos + ")"));
    if (dato === pass) {
        alert("Bienvenido ");
        ingreso = true;
        break;
    } else {
        alert("Clave incorrecta. Le quedan " + (intentos - i) + " intentos.");
    }
}

if (ingreso) {
    mostrarPrecio();
} else {
    alert("Se han agotado los intentos. No se pudo acceder a su cuenta.");
}

function mostrarPrecio() {
    let codigoProducto = prompt("Ingrese el código del producto elegido:\n1. (Single), \n2.(Queen), \n3. (King) \n4. Salir de la tienda ");
    switch (codigoProducto) {
        case "1":
            alert("Colchón Single Precio: $25.000");
            mostrarPrecio();    
            break;
        case "2":
            alert("Colchón Queen Precio: $45.000");
            mostrarPrecio();
            break;
        case "3":
            alert("Colchón King Precio: $65.000");
            mostrarPrecio();
            break;
            case"4":
            salida();
            break;
        default:
            alert("Ese modelo no existe, consúltenos en el formulario de contacto");
            break;
    }
}function salida(){
    let ingreso = true;
    while (ingreso) {
        let opcion = prompt("¿Desea salir de la tienda?\n1. Si\n2. No");
        switch(opcion){
            case "1":
                ingreso = false;
                alert("¡Gracias! ¡Vuelva pronto!");
                break;
            case "2":
                mostrarPrecio();
                break;
            default:
                alert("Opción invalida. Por favor, elija nuevamente.");
                break;
        }
    }
    return ingreso;
}

for (let i = 1; i <= intentos; i++) {
    let dato = parseInt(prompt("Ingrese su clave para acceder al listado (Intento " + i + " de " + intentos + ")"));
    if (dato === pass) {
        alert("Bienvenido ");
        ingreso = true;
        break;
    } else {
        alert("Clave incorrecta. Le quedan " + (intentos - i) + " intentos.");
    }
}

if (ingreso) {
    mostrarPrecio();
} else {
    alert("Se han agotado los intentos. No se pudo acceder a su cuenta.");
}


//PREFERI UTILIZAR NUMEROS EN LUGAR DE LOS NOMBRES DE PRODUCTOS REVIENDO UNA CLASE, MAS COMODO PARA EL USUARIO Y UTILICE ALGUNAS FUNCIONES 
function mostrarPrecio() {
    let codigoProducto = prompt("Ingrese el código del producto elegido:\n1. (Single), \n2.(Queen), \n3. (King) \n4. Salir de la tienda ");
    switch (codigoProducto) {
        case "1":
            alert("Colchón Single Precio: $25.000");
            break;
        case "2":
            alert("Colchón Queen Precio: $45.000");
            break;
        case "3":
            alert("Colchón King Precio: $65.000");
            break;
            case"4":
            salida();
            break;
        default:
            alert("Ese modelo no existe, consúltenos en el formulario de contacto");
            break;
    }
}function salida(){
    let ingreso = true;
    while (ingreso) {
        let opcion = prompt("¿Desea salir de la tienda?\n1. Si\n2. No");
        switch(opcion){
            case "1":
                ingreso = false;
                alert("¡Gracias! ¡Vuelva pronto!");
                break;
            case "2":
                mostrarPrecio();
                break;
            default:
                alert("Opción invalida. Por favor, elija nuevamente.");
                break;
        }
    }
    return ingreso;
}



 
