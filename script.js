//Mostrar regalos
let Mostrar=document.getElementById("Seleccionar");
let Regalos=document.getElementById("Regalos");
let Sonido1=document.getElementById("Sonido1");
let Sonido2=document.getElementById("Sonido2");

Mostrar.addEventListener("click", function() {
    Regalos.style.display="flex";
});

//Elegir regalo
let regaloElegido="";
let MensajeFinal=document.getElementById("Mensajes");
let Eleccion=document.getElementById("Mensaje_seleccion");
let Descripcion=document.getElementById("Descripcion");

document.querySelectorAll(".Regalo").forEach(boton=>{
    boton.addEventListener("click", function(){
        Sonido1.play();
        regaloElegido=this.dataset.regalo;

        document.getElementById("RegaloOculto").value=regaloElegido;
        Regalos.style.display="none";
        MensajeFinal.style.display="flex";
        document.getElementById("Mensajes").scrollIntoView({behavior:"smooth"});

        actualizarMensaje();
    });
});

function actualizarMensaje(){
 
    if(regaloElegido === "cuchara"){
        Eleccion.textContent="Elegiste: Cuchara";
        Descripcion.textContent="Gracias, hacen falta en mi casa";
    }

    else if(regaloElegido === "galleta"){
        Eleccion.textContent="Elegiste: Galleta";
        Descripcion.textContent="Gracias!! enserio";
    }

    else if(regaloElegido === "peluche"){
        Eleccion.textContent="Elegiste: Peluche";
        Descripcion.textContent="Gracias lo pondre con sus hermanos";
    }

    else if(regaloElegido === "abrazo"){
        Eleccion.textContent="Elegiste: Abrazo";
        Descripcion.textContent="Gracias... :D";
    }

    else if(regaloElegido === "tomatazo"){
        Eleccion.textContent="Elegiste: Tomatazo";
        Descripcion.textContent="Zugey, NI SE TE OCURRA";
    }

    else if(regaloElegido === "helado"){
        Eleccion.textContent="Elegiste: Helado";
        Descripcion.textContent="Pero que sea de menta";
    }

    else if(regaloElegido === "alepunto"){
        Eleccion.textContent="Elegiste: Alepunto";
        Descripcion.textContent="Gracias, pero yo soy su creador";
    }

    else if(regaloElegido === "cigarro"){
        Eleccion.textContent="Seleccionaste: Cigarro";
        Descripcion.textContent="No fumo... pero gracias";
    }

    else if(regaloElegido === "dona"){
        Eleccion.textContent="Elegiste: Dona";
        Descripcion.textContent="Gracias!! enserio";
    }

    else if(regaloElegido === "pipis"){
        Eleccion.textContent="Elegiste: Pipis";
        Descripcion.textContent="No estoy listo para esta responsabilidad...";
    }

    else if(regaloElegido === "telefono"){
        Eleccion.textContent="Elegiste: Telefono";
        Descripcion.textContent="Gracias, me hace falta, espera... esto es un juguete";
    }

    else if(regaloElegido === "flor"){
        Eleccion.textContent="Elegiste: Flor";
        Descripcion.textContent="No creo saber cuidar flores, pero gracias";
    }

    else if(regaloElegido === "lata"){
        Eleccion.textContent="Elegiste: Lata";
        Descripcion.textContent="De varias se junta el peso supongo";
    }

    else if(regaloElegido === "huevo"){
        Eleccion.textContent="Elegiste: Huevo";
        Descripcion.textContent="Se rompio... habia un numero dentro. 6";
    }

    else if(regaloElegido === "audifono"){
        Eleccion.textContent="Elegiste: Audifonos";
        Descripcion.textContent="Gracias, aunque solo necesitaba uno";
    }

    else if(regaloElegido === "playera"){
        Eleccion.textContent="Elegiste: Playera";
        Descripcion.textContent="Gracias, la añadire a mi coleccion";
    }

    else if(regaloElegido === "cafe"){
        Eleccion.textContent="Elegiste: Cafe";
        Descripcion.textContent="Es con leche?";
    }

    else if(regaloElegido === "pastel"){
        Eleccion.textContent="Elegiste: Pastel";
        Descripcion.textContent="Gracias, puedes darme mas? asi completo el pastel";
    }

    else if(regaloElegido === "auto"){
        Eleccion.textContent="Elegiste: Auto";
        Descripcion.textContent="Gracias, ojala no fuera de juguete :C";
    }

    else if(regaloElegido === "casa"){
        Eleccion.textContent="Elegiste: Casa";
        Descripcion.textContent="Gracias, ojala no fuera de juguete :C";
    }

    else if(regaloElegido === "nada"){
        Eleccion.textContent="Elegiste: Nada";
        Descripcion.textContent="Enserio? nada? NADA?!";
    }



}

//Configuracion Anonimo

let Box=document.getElementById("Dato_3");
let Nombre=document.getElementById("Dato_1");

Box.addEventListener("change", function(){

if(Box.checked){
    Nombre.disabled=true;
    Nombre.placeholder="Anonimo";
    Nombre.value="";
}

else{
    Nombre.disabled=false;
    Nombre.placeholder="";
}

console.log("Checkbox", Box.checked);
console.log("Disabled", Nombre.disabled);
});

//Musica

let Musica=document.getElementById("Musica");
let Sonido=document.getElementById("Sonido");

Sonido.addEventListener("click", function () {

    if(Musica.paused){
        Musica.play();
        Sonido.style.backgroundImage=`url("imagenes/audioff.jpeg")`;
        console.log(Sonido.style.backgroundImage);
    }

    else{
        Musica.pause();
        Sonido.style.backgroundImage=`url("imagenes/audion.jpeg")`;
        console.log(Sonido.style.backgroundImage);
    }
});

//Agradecimiento

let Enviar=document.getElementById("Envio");
let Agradecimiento=document.getElementById("Fondo_Agradecimiento");

Enviar.addEventListener("click", function(e){
    Sonido2.play();
    e.preventDefault();

    Agradecimiento.style.display="flex";

    setTimeout(function(){

        document.getElementById("Formulario").submit();

        Agradecimiento.style.display="none";
    },4000);

});