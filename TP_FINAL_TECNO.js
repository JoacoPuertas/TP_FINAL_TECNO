let fondo = [];
let hover = [];
let texto = [];
let tipografia;
let fondoJuego, principito, gavilan, vida ;

function preload () {
  for (let i = 0; i < 14; i++) {
    fondo[i] = loadImage("data/p" + i + ".jpg");
  }

  for (let i = 0; i < 22; i++) {
    hover[i] = loadImage("data/h" + i + ".png");
  }

  texto= loadStrings("data/textos.txt");

  tipografia = loadFont('data/tipografia.ttf');

  fondoJuego = loadImage ('data/cielo.png');
  principito = loadImage ('data/principito.png');
  gavilan = loadImage ('data/gavilan.png');
  vida= loadImage ('data/vida.png');
}

function setup() {

  createCanvas (600, 600);

  aventura = new Aventura (fondo, texto, fondoJuego, vida, principito, gavilan, hover );
  textFont (tipografia);
  
}


function draw() {

  aventura.estados();
  
  if (keyIsPressed) {

     this.aventura.actualizarPrinc(keyCode);
  }
}

function mouseClicked () {

 this.aventura.cambioDePantalla();
 
}
