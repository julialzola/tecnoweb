class Pantalla {
  constructor(fondo, texto) {
    this.fondo = fondo;
    this.texto = texto;
  }

  dibujar() {
    push();
    imageMode(CORNER);
    image(this.fondo, 0, 0, width, height);
    fill(0, 120);
    rectMode(CORNER);
    rect(0, height / 10, width, height / 4);
    fill(255);
    textSize(20);
    textLeading(20);
    textAlign(CENTER, CENTER);
    text(this.texto, 20, height / 10, width - 40, height / 4);
    pop();
  }
}
