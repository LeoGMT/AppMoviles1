let arrFunc = () => [];
const tarea=document.getElementById('tarea');
const button = document.createElement("button");
const lista=document.getElementById('lista');
const li = document.createElement("li");


 /*let newTarea = (tarea) => {
    return button.textContent="Eliminar ";
 }*/

 console.log(arrFunc());

 console.log(arrFunc(tarea));
 
 function limpiar() { 
    document.getElementById('tarea').value ='';
 }

 function crear(){
    return button.textContent="Eliminar ";
 }