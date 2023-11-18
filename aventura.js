class Aventura {

  constructor () {

    this.boton = new Boton (1, 200, 100, 100, 1);
    this.boton1 = new Boton (100, 200, 100, 100, 2);

    this.fondo  = fondo;
    this.hover  = [];

    //this.pantalla = 0;
    //this.pantallaActual = 0;
  }

  

  estados (fondo) {

    switch (this.boton.pantalla) {

    case 0:

      background(255, 0, 0);
      //this.xBoton = 500;
      //this.yBoton = 200;
      //this.anchoBoton= 100;
      //this.altoBoton = 100;

      //fill (0);

      //quad (500, 200, 100, 100);

      this.boton.botonCuadrado();

      //this.boton.cambiar ();

      text ("this.pantallaActual: " + this.boton.pantallaActual, 100, 150);
      text ("this.pantalla: " + this.boton.pantalla, 100, 170);

      break;

    case 1:
      background ( 0, 255, 0 );
      //image (fondo[1], 0, 0);

      this.boton1.botonCuadrado();
      text ("this.pantallaActual: " + this.boton.pantallaActual, 100, 150);
      text ("this.pantalla: " + this.boton.pantalla, 100, 170);

      break;

    case 2:
      background ( 0, 0, 255 );
      this.botonCambiar (200, 200, 3, 100, 100);

      text ("this.pantallaActual: " + this.pantallaActual, 100, 150);
      text ("this.pantalla: " + this.pantalla, 100, 170);
      break;

    case 3:
      background ( 0, 255, 255 );
      text ("this.pantallaActual: " + this.pantallaActual, 100, 150);
      text ("this.pantalla: " + this.pantalla, 100, 170);

      break;

    case 4:

      break;

    case 5:

      break;

    case 6:

      break;

    case 7:

      break;

    case 8:

      break;

    case 9:

      break;

    case 10:

      break;

    case 11:

      break;

    case 12:

      break;

    case 13:

      break;

    default:

      break;
    }
  }

  //botonCambiar (x, y, direccion, ancho, alto) {
  //  fill(0);
  //  quad (x, y, x+ancho, y, x+ancho, y+ancho, x, y+ancho);
  //  if (mouseX > x && mouseX < (x+ancho) &&
  //    mouseY > y && mouseY < (y+alto)) {

  //    this.pantallaActual= direccion;
  //  }
  //}

  //  cambiodeEstado (direccion) {

  //    if (mouseX >= this.xBoton & mouseX <= (this.xBoton+this.anchoBoton)
  //    & mouseY >= this.yBoton & mouseY <= (this.yBoton+this.altoBoton)) {

  //      if (mouseIsPressed) {
  //        this.pantalla = direccion
  //      }
  //    }

  //  }
}
