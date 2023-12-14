class BotonRectangular {
  constructor(x, y, ancho, alto, texto) {
    this.x = x;
    this.y = y;
    this.ancho = ancho;
    this.alto = alto;
    this.texto = texto;
  }

  dibujar() {
    let fondo = color(0, 100, 0);
    let borde = color(0);
    let efectoOver = color(0, 200, 0);
    if (this.colision()) {
      fill(efectoOver);
    } else {
      fill(fondo);
    }
    stroke(borde);
    rectMode(CENTER);
    rect(this.x, this.y, this.ancho, this.alto);
    fill(0);
    textAlign(CENTER, CENTER);
    textSize(16);
    text(this.texto, this.x, this.y);
  }

  colision() {
    return (
      mouseX > this.x - this.ancho / 2 &&
      mouseX < this.x + this.ancho / 2 &&
      mouseY > this.y - this.alto / 2 &&
      mouseY < this.y + this.alto / 2
    );
  }
}
