/**
 * Created by railt on 18/10/2017.
 */
function init() {
    var i = 10;

    var cadena = "lo que sea";

    var var1 = "Ray";
    var var2 = "Cardoso";
    var var3 = 5/0;

  //  alert("yo soy mas " + var1);
  //  alert("Mis apellidos son " + var2 + 2);
}

function calcularEdad() {
    var nombre = document.getElementById("nombre").value;
    var edad = document.getElementById("edad").value;

    var dias = edad * 365;

    document.getElementById("resultado").innerHTML = nombre + " tem " + edad + " y ja ha vivido " + dias + "dias";
}

function calcularMayor(num1, num2) {
    var mensaje ="";
    if (num1 > num2)
        mensaje = num1 + " es mayor que " + num2;
    else if(num2 > num1)
        mensaje = num2 + " es mayor que " + num1;
    else
        mensaje = num1 + " y " + num2 + " son iguales";

    document.getElementById("mensaje").innerHTML = mensaje;
}

function mostrarFrase(frase, num) {
    var texto = "";

    var i = 1;

    while(i <= num){
        texto += frase + "<br />";
        i++;
    }
    document.getElementById("mensaje2").innerHTML = texto;
}

function mostrarResultado() {
    var num = document.getElementById("facto").value;
  //  alert(num);

    var fact = 1;
    for (var i = 1; i <= num; i++){
        fact = fact * i;
    }
    document.getElementById("resFacto").innerHTML = fact;
}

