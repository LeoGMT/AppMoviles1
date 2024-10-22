// FUNCION FLECHA
//1. ************************************ */
function mifuncion(a,b){
    return a+b;
}

//2. ************************************ */
console.log(mifuncion(2,3));

//estructura de la flecha
let salu2 = () => {};

//3. ******************************** */
let saludo = (nombre) => {
    return 'Saludos ' + nombre;
}

console.log(saludo("Juan"));

//4. ************************************ */

let saludar = nombre => 'Saludos ' + nombre;
console.log(saludar('Leo'));

//5. *******pasar multiples parametros******************** */

let suma=(a,b) => a+b;
console.log(suma(5,8));

//6. **********crear objeto en funcion flecha*********** */

let obj = () => ({nombre:'Eo', edad: 17})

//para llamr al objeto y acceder a la propiedad

//let persona = obj().nombre;
//console.log(persona);
console.log(obj().nombre);

//6. **********arreglos*********** */
let arrFunc = () => [1,2,3,4,5];

//accediendo a todo el arreglo
console.log(arrFunc());

//accediendo al arreglo
console.log(arrFunc()[4]);

