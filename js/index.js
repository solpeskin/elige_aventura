let nombre;

function clickeado() {
    document.querySelector('.indexStyle').classList.add('clicked');
}

function guardarNombre(){
    nombre = document.querySelector('.nombre').value
    sessionStorage.setItem('nombre', nombre);
    
    console.log(nombre)
}

