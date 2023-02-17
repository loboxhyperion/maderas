const contenedor = document.querySelector('#contenedor');

document.querySelector('#boton-menu').addEventListener('click',() =>{
    contenedor.classList.toggle('active');
});
const comprobarAncho = () =>{
    //QUITA LA CLASE ACTIVE CUADO SEA MENOR
    if(window.innerWidth <= 1400){
        contenedor.classList.remove('active');
    }else{//coloca LA CLASE ACTIVE CUADO SEA MENOR
        contenedor.classList.add('active');
    }
};

comprobarAncho();

//detecta cuando cambia el tamaño de la ventana
window.addEventListener('resize', ()=>{
    comprobarAncho();
});