class Boton {

  constructor (x, y, ancho, alto, direccion) {

    this.x = x ;
    this.y = y;
    this.ancho = ancho;
    this.alto = alto;
    this.direccion = direccion ;
    
    this.pantalla = 0;
    this.pantallaActual = 0;
  }

  botonCuadrado () {
    fill(0);
    quad (this.x, this.y, this.x+this.ancho, this.y, this.x+this.ancho, this.y+this.ancho, this.x, this.y+this.ancho);
    if (mouseX > this.x && mouseX < (this.x+this.ancho) &&
      mouseY > this.y && mouseY < (this.y+this.alto)) {

      this.pantallaActual= this.direccion;
    }
  }



  //if (tecla) {
  //  this.pantalla = direccion;
  //}
}
