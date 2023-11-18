 
 
 let fondo = [];
 let hover = [];
 
function setup() {
  
createCanvas (600, 600);

aventura = new Aventura ();
}


function draw() {

  aventura.estados(fondo);
  
  
}

function preload() {
  
 for ( let i = 0; i < 14; i++ ) {
    fondo[i] = loadImage( "data/p" + i + ".JPG" );
  }
  
}

function mouseClicked () {
  aventura.boton.pantalla = aventura.boton.pantallaActual;
 
}
