//alert("hola");
//FUNCIONES
/*function hello(){
    console.log('Hola Js');
    console.log('Hola html');
    console.log('Hola css');
}

hello();

//CON RETORNO
function hello(){

    return "holas js";
}

const result = hello();
console.log(result);


//
function hello(){

    return {};
}

console.log(hello());

function hello(){

    return {
        nombre: 'Raul'
    };
}

console.log(hello());


//FUNCION QUE RETORNA OTRA FUNCION
function hello(){

    return function(){
        return 'Hola JS'
    }
}

console.log(hello()());

//-----------------------USO DE PARAMETROS EN FUNCIONES----------------------

function hellpconJS(name){
    return 'Hola' + name;
}

console.log('Leo');
console.log('Alin');
console.log('Zetinalgod');
console.log('Brazo de 35');
console.log(hellpconJS(Zeti));

function hellpconJS(x,y=0){
    
    return x + y;
}

console.log(hellpconJS(10));

*/

// --------OBJETOS----------

const user ={
    nombre : 'Leo',
    apellidoM : 'Mata',
    edad : 17,
    edoCivil: 'NPI',
    domicilio : {
        ciudad : 'CDMX',
        calle : 'Hermenegildo Galeana',
        numero : 1345678
    },
    amigos : ['Gordilon', 'Nalgas' , '02'],
    activo : true,
    sendMensaje: function(){
        return 'enviando mensaje'
    }

}

//alert ciudad, calle, numero...
//consola los amigos
//alert (activo/debaja)
//consola nombre apellidos estado civil
//alertt estado

//alert()
alert(user.domicilio.ciudad + user.domicilio.calle + user.domicilio.numero)
console.log(user.amigos,);
alert(user.activo)
console.log(user.nombre, user.apellidoM, user.edoCivil);
alert(sendMensaje)

