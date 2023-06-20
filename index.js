const miBoton = document.getElementById('miBoton');

function HandleClick() {
    alert('Hola, has hecho click en donde te dije');
}

miBoton.addEventListener("click",function() {
    alert('Haz hecho click en el boton');
});