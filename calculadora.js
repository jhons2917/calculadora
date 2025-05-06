//Pedir los datoos
console.log(`Operaciones: 
    Suma.
    Resta.
    Multiplicacion.
    Division.`);
let ope = prompt(`Ingresa la operación a realizar: `).toLowerCase();
let n1 = parseFloat(prompt(`Ingrese el primer número: `));
let n2 = parseFloat(prompt(`Ingrese el segundo número: `));

//Funcion que realiza las operaciones de la calculadora
const realizarOperacion = (n1,n2,ope)=>{
    do {
        if (ope == "suma") {
            console.log(`Resultado ${ope}: ${n1+n2}`);
        }else if(ope == "resta"){
            console.log(`Resultado ${ope}: ${n1-n2}`);
        }else if(ope == "multiplicacion"){
            console.log(`Resultado ${ope}: ${n1*n2}`);
        }else if(ope == "division"){
            if (n2 == 0) {
                console.log(`No se puede dividir entre 0`);
            }else{
                console.log(`Resultado ${ope}: ${n1/n2}`);
            }
        }else{
            console.log(`Error, la operacion no es valida`);
        }
        console.log(`Si no desea realizar otra operacion, ingrese "salir" cuando vaya a introducir la operacion.`);
        ope = prompt(`Ingresa la operación a realizar: `).toLowerCase();
        if (ope == "salir") {
            console.log(`Gracias por utilizar la calculadora.`);
        }else{
            n1 = parseFloat(prompt(`Ingrese el primer número: `));
            n2 = parseFloat(prompt(`Ingrese el segundo número: `));
        }
    } while (ope != "salir");
}

realizarOperacion(n1,n2,ope);
