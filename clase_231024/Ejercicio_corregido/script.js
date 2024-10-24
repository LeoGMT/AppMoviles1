let arreglo = () => [];
const tarea=document.getElementById('tarea');
const button = document.createElement("button");
const lista=document.getElementById('lista');
const li = document.createElement("li");


 /*let newTarea = (tarea) => {
    return button.textContent="Eliminar ";
 }*/

 console.log(arreglo());

 //console.log(arreglo(tarea));
 
 function limpiar() { 
    document.getElementById('tarea').value ='';
 }

 function crear(){

   arreglo.push(tarea);
    return button.textContent="Eliminar ";
 }