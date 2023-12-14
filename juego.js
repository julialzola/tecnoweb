class Juego {
  constructor() {
    this.persona = new Persona(50);
    this.piedras = [];
    this.arboles = [];
    this.tiempoInicio = millis();
    this.estado = "instrucciones";
    for (let i = 0; i < 2; i++) {
      this.piedras.push(new Piedra(i * 50 + 50));
      this.arboles.push(new Arbol(i * 50 + 50));
    }
  }
  
  actualizar() {
    if (this.estado == "jugando") {
      for (let i = 0; i < 2; i++) {
        this.piedras[i].actualizar();
      }

      let tiempoTranscurrido = millis() - this.tiempoInicio;
      this.persona.calcularColision(this.piedras);

      if (this.persona.getVidas() <= 0) {
        this.estado = "perdiste";
        this.reiniciar();
      }
      if (this.persona.getVidas() >= 1 && tiempoTranscurrido >= 15000) {
        this.estado = "ganaste";
      }
    }

    for (let i = 0; i < 2; i++) {
      this.arboles[i].actualizar();
    }
  }

  reiniciar() {
    this.persona = new Persona(50);
    this.piedras = [];
    for (let i = 0; i < 10; i++) {
      this.piedras.push(new Piedra(i * 50 + 50));
    }
    this.arboles = [];
    for (let i = 0; i < 10; i++) {
      this.arboles.push(new Arbol(i * 50 + 50));
    }
    this.tiempoInicio = millis();
  }

  dibujar() {
    if (this.estado == "instrucciones") {
      this.fondo = imagenFondo;
      image(this.fondo, 0, 0, width, height);
      fill(240, 255, 170);
      rect(300,250,400,400);
      fill(0);
      text("Mueva el personaje con las flechas del teclado y", width / 2, 100);
      text("esquivá las piedras para escapar del profesor", width / 2, 135);
      text("¡tenés un máximo de dos fallos!", width / 2, 190);
      text("PRESIONE CUALQUIER TECLA", width / 2, 280);
      text("PARA COMENZAR", width / 2, 320);

      if (keyIsPressed) {
        this.reiniciar();
        this.estado = "jugando";
      }
    } else if (this.estado == "jugando") {
      image(this.fondo, 0, 0, width, height);

      this.persona.dibujar();

      for (let i = 0; i < 3; i++) {
        this.piedras[i].dibujar();
      }
      for (let i = 0; i < 1; i++) {
        this.arboles[i].dibujar();
      }
    } else if (this.estado == "perdiste") {
      image(this.fondo, 0, 0, width, height);
      fill(250, 76, 76);
      rect(300,250,400,400);
      fill(0);
      text("PERDISTE :(", width / 2, 130);
      text("Presione en la pantalla", width / 2, 200);
      text("para reiniciar", width / 2, 230);
      if (mouseIsPressed) {
        this.estado = "instrucciones";
      }
    } else if (this.estado == "ganaste") {
      image(this.fondo, 0, 0, width, height);
      fill(76, 250, 76);
      rect(300,250,400,400);
      fill(0);
      text("¡GANASTE! :)", width / 2, 130);
      text("Presione en la pantalla", width / 2, 200);
      text("para continuar", width / 2, 230);
      if (mouseIsPressed) {
        this.estado = 13;
      }
    }
  }

  teclado() {
    if (this.estado == "jugando") {
      this.persona.moverTeclas(keyCode, LEFT_ARROW, RIGHT_ARROW);
   }
  }
}

class Persona {
  constructor(t) {
    this.t = 100;
    this.x = width / 2;
    this.y = height / 1.3;
    this.c = random(100, 200);
    this.imagen = imagenPersonaje;
    this.vidas = 2;
  }

  moverTeclas(tecla, izquierda, derecha) {
    if (tecla == izquierda && this.x > 150) {
      this.x -= 150;
    } else if (tecla == derecha && this.x < 450) {
      this.x += 150;
    }
  }

  dibujar() {
    push();
    imageMode(CENTER);
    image(this.imagen, this.x, this.y, this.t, this.t);
    pop();
  }

  calcularColision(piedras) {
    let distanciaColision = 70;
    for (let i = 0; i < piedras.length; i++) {
      let distanciaPiedraPersona = dist(
        this.x,
        this.y,
        piedras[i].x,
        piedras[i].y
      );

      if (distanciaPiedraPersona < distanciaColision) {
        this.x = width / 2;
        this.y = height / 1.9;
        this.vidas--;
      }
    }
  }

  getVidas() {
    return this.vidas;
  }
}

class Piedra {
  constructor(y) {
    this.x = random([150, 300, 450]);
    this.y = -70;
    this.t = 70;
    this.imagen = imagenPiedra;
    this.v = 2;
  }

  actualizar() {
    this.y = this.y + this.v;
    if (this.y > height + this.t) {
      this.x = random([150, 300, 450]);
      this.y = -70;
      this.v += 0.5;
    }
  }

  dibujar() {
    push();
    imageMode(CENTER);
    image(this.imagen, this.x, this.y, this.t, this.t);
    pop();
  }
}

class Arbol {
  constructor(y) {
    this.x1 = 40;
    this.x2 = 560;
    this.y = -70;
    this.t1 = 100;
    this.t2 = 500;
    this.imagen = imagenArbol;
    this.v = 2;
  }

  actualizar() {
    this.y = this.y + this.v;
    if (this.y > height + this.t2) {
      this.x1 = 40;
      this.x2 = 560;
      this.y = -70;
      this.v += 0.5;
    }
  }

  dibujar() {
    push();
    imageMode(CENTER);
    image(this.imagen, this.x1, this.y, this.t1, this.t2);
    image(this.imagen, this.x2, this.y, this.t1, this.t2);
    pop();
  }
}
