//para calcular el IMC
function calcularIMC() {
    var p = parseFloat(document.getElementById("peso").value);
    var alt = parseFloat(document.getElementById("altura").value);
    var imc = 703 * p / (alt * alt);

    var clasificacion = "";
    if (imc < 18.5) {
        clasificacion = "Bajo peso";
    } else if (imc >= 18.5 && imc <= 24.9) {
        clasificacion = "Normal";
    } else if (imc >= 25 && imc <= 29.9) {
        clasificacion = "Exceso de peso";
    } else {
        clasificacion = "Obeso";
    }

    var resultado = `Su IMC es ${imc.toFixed(1)}, que lo clasifica como ${clasificacion}.`;
    document.getElementById("resultado").textContent = resultado;

}
//para calcular la edad-mascota
function calcularEdad7(edadHumana) {
    var resultado = "";
    if (edadHumana <= 0) {
        resultado = "";
    } else if (edadHumana == 1) {
        resultado = "La edad de tu perro es aprox 7 años.";
    } else if (edadHumana == 2) {
        resultado = "La edad de tu perro es aprox 14 años.";
    } else {
        var edadPerro = 16 * Math.log(edadHumana) + 31;
        resultado = "La edad de tu perro es aprox " + edadPerro.toFixed(0) + " años.";
    }
    
    document.getElementById("resultado").textContent = resultado;
}


