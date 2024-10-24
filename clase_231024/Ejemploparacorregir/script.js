let task = ["Comprar", "Limpiar", "Estudiar", "Limpiar la casa"];

console.log("Lista de tareas", task)

//Ingresar algo al arreglo
task.push("ir a la escuela");

task.splice(1,1)

task.push("ir a casa");

//Usando forEach

let tasks = ["comprar", "estudiar"];

tasks.forEach((tasks, index) => {
    console.log(`tarea + ${index} ${tasks}`);
    })