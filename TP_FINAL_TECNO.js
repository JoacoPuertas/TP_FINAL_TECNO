 
 
 let fondo = [];
 let hover = [];
 let texto = [];
 let tipografia;
 
 function preload () {
   for (let i = 0; i < 13; i++) {
    fondo[i] = loadImage("data/p" + i + ".jpg");
  }
  
  for (let i = 0; i < 21; i++) {
    hover[i] = loadImage("data/h" + i + ".png");
  }
   
   texto= loadStrings("data/textos.txt");
   
   tipografia = loadFont('data/tipografia.ttf');
   
 }
 
function setup() {
  
createCanvas (600, 600);

aventura = new Aventura (fondo, texto);
textFont (tipografia);

}


function draw() {
  
  aventura.estados(fondo);
  
}

function mouseClicked () {
 
  aventura.boton.pantalla = aventura.boton.pantallaActual;
 
}
