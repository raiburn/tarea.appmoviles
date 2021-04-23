const metros = () => {
    const pies = document.getElementById("cantidad").value*3.28084;
    document.getElementById("valor").value = pies.toString();
}

const kilometros = () =>{
    const millas = document.getElementById("cantidad").value/1.6;
    document.getElementById("valor").value = millas.toString();
}

const litros = () => {
    const galones = document.getElementById("cantidad").value*0.26;
    document.getElementById("valor").value = galones.toString();
}

const celsius = () => {
    const galones = (document.getElementById("cantidad").value)*(9/5)+32;
    document.getElementById("valor").value = galones.toString();
}

const gramos = () => {
    const libras = (document.getElementById("cantidad").value)*0.00220462;
    document.getElementById("valor").value = libras.toString();
}