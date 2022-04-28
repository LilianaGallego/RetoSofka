function mostrarexp() {//con display block se muestra el texto oculto
    var x = document.getElementById('texto').style.display='block';
  
}

function ocultarexp() {//con display none se oculta el texto 
    var x = document.getElementById('texto').style.display='none';

}

function mostrar() {//con display block se muestra el texto oculto
    var x = document.getElementById('texto1').style.display='block';
  
}

function ocultar() {//con display none se oculta el texto 
    var x = document.getElementById('texto1').style.display='none';

}

function mostrarcert() {//con display block se muestra el texto oculto
    var x = document.getElementById('texto2').style.display='block';
  
}

function ocultarcert() {//con display none se oculta el texto 
    var x = document.getElementById('texto2').style.display='none';

}

function mostrarref() {//con display block se muestra el texto oculto
    var x = document.getElementById('texto3').style.display='block';
  
}

function ocultarref() {//con display none se oculta el texto 
    var x = document.getElementById('texto3').style.display='none';

}

//Se crean dos arreglos el color1  para cambiar el color de fondo de la hoja de vida y color2 para cambiar el color del boton
let color1=["aquamarine","aqua","darkbeige","pink",'darksalmon',"gold","cyan",'chartreuse']
let color2=["aquamarine",'chartreuse','darksalmon',"pink","gold","aqua","cyan","darkbeige"]
function cambiarColor(){
    //Se usan los metodos random y floor de la libreria math para seleccionar colores al azar del arreglo de colores creado anteriormente
    // teniendo en cuenta la longitud de los arreglos
    let random1= Math.floor(Math.random()*color1.length);
    let random2= Math.floor(Math.random()*color2.length);

    // se muesta lo que se genera al usar dichos metodos
    console.log("Random1 value: "+ random1);
    console.log("Random2 value: "+ random2);

    //style.backgroyund se usa para cambiar el color de fondo y color para cambiar el style.color de letra, un color diferente por cada clik 
    //que se da en el boton
    let x=document.getElementById('fondo').style.background=color1[random1];
    let y=document.getElementById('fondo').style.color=color2[random2];
    let z=document.getElementById('fondo').style.background=color2[random2];

    let x1=document.getElementById('columna1').style.background=color1[random1];
    let y1=document.getElementById('columna1').style.color=color2[random2];
    let z1=document.getElementById('columna1').style.background=color2[random2];

    
}