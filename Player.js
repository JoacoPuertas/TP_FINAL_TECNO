
class Player { // principito
 
  constructor (img) {
    this.ancho = 70;
    this.alto = 150;
    this.x = width / 2;
    this.y = height*0.85;
    this.principito = img;
    this.velocidadX = 0;
    
  }
  
  actualizar(tecla) {
    if (tecla === LEFT_ARROW && this.x > this.ancho / 4) {
      this.velocidadX = -4; 
    } else if (tecla === RIGHT_ARROW && this.x < width - this.ancho / 4) {
      this.velocidadX = 4; 
    } else {
      this.velocidadX = 0; // No se presiona ninguna tecla, la velocidad es cero
    }

    // Actualiza la posición basándote en la velocidad
    this.x += this.velocidadX;
  }
  
  dibujar () {
    push(); 
    imageMode (CENTER);
    image (principito, this.x, this.y, this.ancho, this.alto );
    pop();
  }
  
  
  getY() {
    return this.y;
  }
  
  getX() {
    return this.x;
  }
  
  getAncho() {
    return this.ancho;
  }
  
  getAlto() {
    return this.alto;
  }
  
}
