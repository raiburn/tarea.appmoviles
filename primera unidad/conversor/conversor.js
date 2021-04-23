const metros = () => {
    const pies = document.getElementById("cantidad").value*3.28084;
    document.getElementById("valor").value = pies.toString();
}

const kilometros = () =>{
    const millas = document.getElementById("cantidad").value/0.621371;
    document.getElementById("valor").value = millas.toString();
}

const litros = () => {
    const galones = document.getElementById("cantidad").value/0.264172;
    document.getElementById("valor").value = galones.toString();
}

const celsius = () => {
    const galones = (document.getElementById("cantidad").value)*(9/5)+32;
    document.getElementById("valor").value = galones.toString();
}

const gramos = () => {
    const libras = (document.getElementById("cantidad").value)*2.20462;
    document.getElementById("valor").value = libras.toString();
}