function conversor() {
    // Variables de entrada
    // tipos de moneda

    var cantidad, can_divisa, con_divisa, resultado_dol, resultado, vd;

    cantidad = document.getElementById("cantidad").value;
    can_divisa = document.getElementById("can_divisa").value;
    con_divisa = document.getElementById("sel_divisa").value;

    switch(can_divisa){
        case '1' :
            vd= 20.30;
            break;
        case '2' :
            vd= 1;
            break;
        case '3' :
            vd= 1.28;
            break;
        case '4' :
            vd= 0.83;
            break;
        case '5' :
            vd= 104.11;
            break;
    }

    resultado_dol = cantidad * vd;

    switch(con_divisa){
        case '1' :
            resultado = resultado_dol * 20.30  ;
            break;
        case '2' :
            resultado= resultado_dol * 1;
            break;
        case '3' :
            resultado= resultado_dol * 1.28;
            break;
        case '4' :
            resultado= resultado_dol * 0.83;
            break;
        case '5' :
            resultado= resultado_dol * 104.11;
            break;
    }
    document.getElementById("resultado").innerHTML = resultado;
}

function valor_divisa(){

    var divisa_sel, val_divisa;
    divisa_sel = document.getElementById("sel_divisa").value;

    switch(divisa_sel){
        case '1' :
            val_divisa =   20.30  ;
            break;
        case '2' :
            val_divisa=   1;
            break;
        case '3' :
            val_divisa=   1.28;
            break;
        case '4' :
            val_divisa=   0.83;
            break;
        case '5' :
            val_divisa=   104.11;
            break;
    }

    document.getElementById("valor").value = "" + val_divisa;



}

/*
0.83  EURO
104.11 YEN
 1    USD
 1.28 CAN
20.30 MXN */