function tarea() {
    let tarea = document.getElementById("input").value;

    if (tarea !== '') {
        let li = document.createElement("li");
        li.textContent = tarea;

        let Eliminar = document.createElement("button");
        Eliminar.textContent = "Eliminar";
        Eliminar.onclick = function() {
            li.remove();
        };

        li.appendChild(Eliminar);
        document.getElementById("listaTareas").appendChild(li);
        
        document.getElementById("input").value = "";
    }
}
