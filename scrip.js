

let boton = document.getElementById("boton");

let titulodespedida = document.getElementById("titulodespedida");



boton.addEventListener("click", toggletext);


function toggletext(){
    titulodespedida.classList.toggle("show");
    


}