function appendToDisplay (value) { //Crea una funcion de nombre appendToDisplay que recive un valor para mostrarlo en el display
    
    document.getElementById('display').value += value;//metodo utilizado para obtener un elemento por base de un id
}

 function clearDisplay() { //Crea una funcion de nombre clearDisplay para borrar el contenido del display
    document.getElementById('display').value ='';//metodo utilizado para obtener un elemento por base de un id
 }
    
    
function deleteLast() {//Crea una funcion de nombre deleteLast que borra el ultimo digito del display
    
    
    let displayValue = document.getElementById('display').value;//Se va recorriendo el arreglo que contiene el display
    document.getElementById('display').value = displayValue.slice(0, -1);//metodo para borra el ultimo digito del display
}
    
 function calculateResult() {//Crea una funcion de nombre deleteLast que borra el ultimo digito del display
    
    try {//Funcion para encontrar errores y dar un resultado
    
    let result = eval(document.getElementById('display').value);//Se va recorriendo el arreglo que contiene el display
    document.getElementById('display').value = result;
    } catch (error) {
         alert('Expresión inválida');//Manda una alerta de expresion invalida
    }
}