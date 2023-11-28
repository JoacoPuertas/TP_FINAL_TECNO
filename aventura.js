class Aventura {

  constructor (fondo, texto, fondoJuego, img, player, enemigo, hover) {

    this.boton = new Boton (hover);
    this.juego = new Juego (fondoJuego, img, player, enemigo);

    //OBJETO P/ DIBUJAR PANTALLA + TEXTO
    this.pantallas = new Visual (fondo, texto);

    //this.hover  = [];

    // ESTAS VARIABLES HAY Q GUARDARLAS POR SI TERMINAMOS
    // USANDO EL MÉTODO BOTÓN
    //this.pantalla = 0;
    //this.pantallaActual = 0;

    this.puedeMover = true;
  }



  estados (fondo) {

    switch (this.boton.pantalla) {

    case 0: //PANTALLA INICIAL

      this.pantallas.dibujar (0, 0, -150);

      this.boton.botonCuadrado (210, 490, 175, 30, 1, 0, 0);
      //this.boton.Cuadrado();

      //texto de ayuda
      //text ("this.pantallaActual: " + this.boton.pantallaActual, 100, 150);
      //text ("this.pantalla: " + this.boton.pantalla, 100, 170);

      break;

    case 1: //PANTALLA 1

      this.pantallas.dibujar (1, 0, 50);

      this.boton.botonCuadrado (100, 225, 100, 220, 2, 2, 1);


      //this.boton.Cuadrado();

      //text ("this.pantallaActual: " + this.boton.pantallaActual, 100, 150);
      //text ("this.pantalla: " + this.boton.pantalla, 100, 170);

      break;

    case 2: //PANTALLA 2, ELECCIÓN PLANETAS

      this.pantallas.dibujar (2, 1, 50);

      this.boton.botonCircular(330, 225, 90, 3, 3, 1);
      this.boton.botonCircular(460, 320, 90, 4, 4, 1);

      //text ("this.pantallaActual: " + this.boton.pantallaActual, 100, 150);
      //text ("this.pantalla: " + this.boton.pantalla, 100, 170);
      //break;

    case 3:

      this.pantallas.dibujar (3, 3, 50);

      this.boton.botonCuadrado (50, 275, 100, 220, 5, 5, 1);

      //text ("this.pantallaActual: " + this.boton.pantallaActual, 100, 150);
      //text ("this.pantalla: " + this.boton.pantalla, 100, 170);

      break;

    case 4:

      this.pantallas.dibujar (4, 4, 50);


      this.boton.botonCuadrado (40, 250, 100, 240, 5, 6, 1);



      break;

    case 5:

      background (0);
      this.juego.dibujar();
      this.juego.actualizar();


      fill (200);
      //text (this.juego.principito.x, 100, 100);

      if (this.juego.cantVidas <= 0) {
        this.boton.pantalla = 6;

        //reseteo de variables
        this.juego.reset();
      } else if (this.juego.cantVidas > 0 & this.juego.contador < 0) {

        if (this.juego.cantVidas == 3) {
          this.boton.pantalla = 7;

          //reseteo de variables
          this.juego.reset();
        } else if (this.juego.cantVidas > 0 & this.juego.cantVidas < 3 ) {
          this.boton.pantalla = 8;

          //reseteo de variables
          this.juego.reset();
        }
      }
      
      break;

    case 6:

      this.pantallas.dibujar (6, 5, 70);

      this.boton.botonCuadrado (300, 510, 65, 20, 0, 20, 1);
      this.boton.botonCuadrado (390, 510, 110, 20, 13, 21, 1);


      break;

    case 7:

      this.pantallas.dibujar (7, 6, 70);

      this.boton.botonCircular (380, 330, 110, 9, 10, 1);

      break;

    case 8:

      this.pantallas.dibujar (8, 7, 70);

      this.boton.botonCircular (380, 330, 100, 10, 11, 1);

      break;

    case 9:

      this.pantallas.dibujar (9, 8, 70);

      this.boton.botonCuadrado (440, 200, 100, 260, 12, 12, 1);
      this.boton.botonCuadrado (50, 200, 150, 260, 11, 13, 1);

      break;

    case 10:

      this.pantallas.dibujar (10, 9, 30);

      this.boton.botonCuadrado (50, 260, 90, 230, 12, 14, 1);

      break;

    case 11:

      this.pantallas.dibujar (11, 10, 70);

      this.boton.botonCuadrado (210, 550, 65, 20, 0, 18, 1);
      this.boton.botonCuadrado (300, 550, 110, 20, 13, 19, 1);

      break;

    case 12:

      this.pantallas.dibujar (12, 11, 70);

      this.boton.botonCuadrado (280, 540, 65, 20, 0, 15, 1);
      this.boton.botonCuadrado (370, 540, 110, 20, 13, 16, 1);

      break;

    case 13: //CREDITOS

      background (0);
      this.boton.botonCuadrado (50, 260, 90, 230, 0);

      break;

    default:

      break;
    }
  }



  //EL METODO BOTON
  //
  //botonCambiar (x, y, direccion, ancho, alto) {
  //  fill(0);
  //  quad (x, y, x+ancho, y, x+ancho, y+ancho, x, y+ancho);
  //  if (mouseX > x && mouseX < (x+ancho) &&
  //    mouseY > y && mouseY < (y+alto)) {

  //    this.pantallaActual= direccion;
  //  }
  //}
}
