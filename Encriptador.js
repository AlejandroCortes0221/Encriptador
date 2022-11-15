const mensaje = document.querySelector(".mensaje");
const Caja = document.getElementById("caja");
const Resultado = document.querySelector(".resultado");
const copiar = document.querySelector(".copiar");
const Reglas = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
const Acentuaciones = ["á","é","í","ó","ú"];

function Encriptar(){
    let cadena = mensaje.value;
    let bandera = false;
    for(let j = 0; j < cadena.length; j++){
        let letraActual =cadena.charAt(j);
        for (let k = 0; k < Acentuaciones.length; k++){
            if(letraActual != " " & letraActual == letraActual.toUpperCase() || letraActual == Acentuaciones[k]){
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'La cadena contiene mayusculas o acentos',
                })
                bandera = true;
                break;
            }
        }
    }
    if(!bandera){
        for(let i = 0; i < Reglas.length; i++){
        if(cadena.includes(Reglas[i][0])){
            cadena = cadena.replaceAll(Reglas[i][0],Reglas[i][1]);
        }
    }
    if(cadena == ""){
       
    } 
    else{
        Caja.remove();
        Resultado.value = cadena;
        Resultado.style.height="auto";
        Resultado.style.height="auto";
        Resultado.style.visibility="visible";
        copiar.style.visibility="visible";
        copiar.style.display="relative";
    }
    }
    
}

function Desencriptar(){
    let cadena = mensaje.value;
    let bandera = false;
    for(let j = 0; j < cadena.length; j++){
        let letraActual =cadena.charAt(j);
        for (let k = 0; k < Acentuaciones.length; k++){
            if(letraActual != " " & letraActual == letraActual.toUpperCase() || letraActual == Acentuaciones[k]){
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'La cadena contiene mayusculas o acentos',
                })
                bandera = true;
                break;
            }
        }
    }
    if(!bandera){
        for(let i = 0; i < Reglas.length; i++){
                if(cadena.includes(Reglas[i][1])){
                    cadena = cadena.replaceAll(Reglas[i][1],Reglas[i][0]);
                }
            }
            if(cadena == ""){
        
            }else{
                Caja.remove();
                Resultado.value = cadena;
                Resultado.style.height="auto";
                Resultado.style.height="auto";
                Resultado.style.visibility="visible";
                copiar.style.visibility="visible";
            }
    }
    
}

function Copiar(){
    Resultado.select();
    navigator.clipboard.writeText(Resultado.value);
    Swal.fire(
  'Texto copiado',
  'Has click en el boton',
  'success'
)
}