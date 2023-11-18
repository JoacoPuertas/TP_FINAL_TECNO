class Boton {

  constructor () {

    this.x = 0 ;
    this.y = 0;
    this.ancho = 0;
    this.alto = 0;
    this.direccion = 0 ;

    this.pantalla = 0;
    this.pantallaActual = 0;
  }
  
  ubicacionCuadrado (x, y, ancho, alto, direccion) {
    this.x = x ;
    this.y = y;
    this.ancho = ancho;
    this.alto = alto;
    this.direccion = direccion ;
  }

  Cuadrado () {

    fill(200);
    quad (this.x, this.y, this.x+this.ancho, this.y, this.x+this.ancho, this.y+this.ancho, this.x, this.y+this.ancho);
    if (mouseX > this.x && mouseX < (this.x+this.ancho) &&
      mouseY > this.y && mouseY < (this.y+this.alto)) {

      this.pantallaActual= this.direccion;
    }
  }
}
