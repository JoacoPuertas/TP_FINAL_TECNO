class Aventura {

  constructor (fondo, texto) {

    this.boton = new Boton ();

    //OBJETO P/ DIBUJAR PANTALLA + TEXTO
    this.pantallas = new Visual (fondo, texto);

    //this.hover  = [];

    // ESTAS VARIABLES HAY Q GUARDARLAS POR SI TERMINAMOS
    // USANDO EL MÉTODO BOTÓN
    //this.pantalla = 0;
    //this.pantallaActual = 0;
  }



  estados (fondo) {

    switch (this.boton.pantalla) {

    case 0: //PANTALLA INICIAL

      this.pantallas.dibujar (0, 0, 50);

      this.boton.ubicacionCuadrado (1, 200, 100, 100, 1);
      this.boton.Cuadrado();

      //texto de ayuda
      text ("this.pantallaActual: " + this.boton.pantallaActual, 100, 150);
      text ("this.pantalla: " + this.boton.pantalla, 100, 170);

      break;

    case 1: //PANTALLA 1

      this.pantallas.dibujar (1, 1, 50);


      this.boton.ubicacionCuadrado (100, 200, 100, 100, 2);
      this.boton.Cuadrado();

      text ("this.pantallaActual: " + this.boton.pantallaActual, 100, 150);
      text ("this.pantalla: " + this.boton.pantalla, 100, 170);

      break;

    case 2: //PANTALLA 2, ELECCIÓN PLANETAS

      this.pantallas.dibujar (2, 1, 50);

      text ("this.pantallaActual: " + this.boton.pantallaActual, 100, 150);
      text ("this.pantalla: " + this.boton.pantalla, 100, 170);
      break;

    case 3:
      background ( 0, 255, 255 );
      text ("this.pantallaActual: " + this.boton.pantallaActual, 100, 150);
      text ("this.pantalla: " + this.boton.pantalla, 100, 170);

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
