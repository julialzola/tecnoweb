class Estado {
  constructor() {
    this.j = new Juego();
    this.fondos = [];
    this.textos = [];
    this.cantImagenes = 18;
    this.estado = 0;
    this.inicializarFondos();
    this.inicializarTextos();
    this.inicializarPantallas();
    this.inicializarBotones();
  }

  inicializarFondos() {
    for (let i = 0; i < this.cantImagenes; i++) {
      this.fondos[i] = loadImage("data/fondo_" + nf(i, 2) + ".png");
    }
  }
  
  inicializarTextos() {
    this.textos = new Array(20);
  }

  inicializarPantallas() {
    this.pantallas = [
      new Pantalla(this.fondos[0], ""),
      new Pantalla(this.fondos[1], "Gracias a la Máquina del Tiempo, han llegado a 1928, se observa un pueblo de Illonis, primavera, una neblina fresca cubre las calles del amanecer"),
      new Pantalla(this.fondos[2], "Observan a un niño corriendo, ¡síganlo! y estudien sus conductas primitivas -susurro el Sr.Fields-"),
      new Pantalla(this.fondos[3], "El niño los lleva hasta lo que parecia ser un circo, ninguno de ustedes tres habian visto uno antes, en el presente no existen. Le piden al Sr.Fields poder ver el espectáculo y este acepta"),
      new Pantalla(this.fondos[4], "Saliendo del circo, comentan con el Sr.Fields sus impresiones sobre el show. Tú y William quedaron algo desconcertados, y Janet parecia estar atontada a la par que intrigada; el Sr.Fields anotaba calificaciones en su libro de evaluación de alumnos"),
      new Pantalla(this.fondos[5], "Vuelven a la Máquina, y el Sr.Fields cambia de tiempo para así viajar al 4 de julio, festividad ya exstinta y anticuada"),
      new Pantalla(this.fondos[6], "¡No se asusten! felizmente prohibieron los fuegos artificiales hace mas de un siglo, -exlamó Fields-. Los niños del pueblo bailaban y festejaban. tú y William observan sin mucha expresión, Janet mostraba un especial agrado por lo que veía"),
      new Pantalla(this.fondos[7], "La Máquina realizo un último viaje, esta vez en octubre, la víspera de halloween. Gracias a Dios ustedes fueron criados en un mundo antiséptico, sin sombras ni fantasmas, con festividades decentes así como el día de la Maquina -dijo el Sr.Fields-"),
      new Pantalla(this.fondos[7], "Quiero estar allí con ellos -dijo Janet-   ¿Qué? preguntó el Sr.Fields      Quiero quedarme aquí, quiero ver todo esto y no ir nunca mas a otro sitio. Quiero fuegos artificiales, calabazas y circos, también quiero dias de halloween y cuatros de julio como los que vimos.    Eso no puede ser... -dijo el Sr.Fields-"),
      new Pantalla(this.fondos[8], "Pero, súbitamente, Janet se escapó  ¡Janet vuelve aquí ahora! gritó Fields"),
      new Pantalla(this.fondos[9], "William quiso seguirlos, ¡pero el Sr.Fields lo atrapó!"),
      new Pantalla(this.fondos[10], "¿Asi que quieren quedarse en el pasado eh? muy bien ¡quedense en este horror, en este caos! ¡volverán a buscarme pero yo ya no estaré aquí! -gritaba el Sr.fields- mientras arrastraba a William sollozando"),
      new Pantalla(this.fondos[11], "Un gran viento de otoño solpó a través del pueblo, y cuando dejo de soplar, habia llevado a todos los niños. invitados o no, hacia la puerta de casas que se ceraron tras ellos; y dentro, a la luz de las velas, alguien les estaba sirviendo jugo de manzana a todos, sin preguntarles quienes eran."),
      new Pantalla(this.fondos[12], "El Sr.Fields te capturó a la fuerza junto con William y abandona a Janet para dirigirse hacía la Maquina del Tiempo"),
      new Pantalla(this.fondos[13], "Fueron devueltos al presente, les han prohibido volver a viajar y cumplirán una condena de 25 años dentro de una prision de realidad virtual"),
      new Pantalla(this.fondos[14], "Has sido el único que se ha quedado con el Sr.Fields, Janet y William han escapado a pesar de los gritos y amenazas"),
      new Pantalla(this.fondos[15], "¡Felicidades alumnos! han pasado la trigésima octava prueba de adoctrinamiento escolar en comportamiento"),
      new Pantalla(this.fondos[16], ""),
      // Agregar más pantallas
    ];
  }

  inicializarBotones() {
    this.botonesPorPantalla = [
      [
        // pantalla 0
        new BotonRectangular(width / 4 * 3, height / 1.2, 140, 60, "COMENZAR"),],
      [
        // pantalla 1
        new BotonRectangular(width / 4 * 3, height / 1.2, 140, 60, "SIGUIENTE"),],
      [
        // pantalla 2
        new BotonRectangular(width / 4 * 3, height / 1.2, 140, 60, "SEGUIRLO"),],
      [
        // pantalla 3
        new BotonRectangular(width / 4 * 3, height / 1.2, 140, 60, "SIGUIENTE"),],
      [
        // pantalla 4
        new BotonRectangular(width / 4 * 3, height / 1.2, 140, 60, "SIGUIENTE"),],
      [
        // pantalla 5
        new BotonRectangular(width / 4 * 3, height / 1.2, 140, 60, "SIGUIENTE"),],
      [
        // pantalla 6
        new BotonRectangular(width / 4 * 3, height / 1.2, 140, 60, "SIGUIENTE"),],
      [
        // pantalla 7
        new BotonRectangular(width / 4 * 3, height / 1.2, 140, 60, "SIGUIENTE"),],
      [
        // pantalla 8
        new BotonRectangular(width / 4 * 3, height / 1.2, 140, 60, "SIGUIENTE"),],
      [
        // pantalla 9
        new BotonRectangular(width / 4 * 3, height / 1.2, 140, 60, "SEGUIRLA"),
        new BotonRectangular(width / 4, height / 1.2, 140, 60, "QUEDARSE"),],
      [
        // pantalla 10
        new BotonRectangular(width / 4 * 3, height / 1.2, 140, 60, "DEJARLO"),
        new BotonRectangular(width / 4, height / 1.2, 140, 60, "AYUDARLO"),],
      [
        // pantalla 11
        new BotonRectangular(width / 4 * 3, height / 1.2, 140, 60, "SIGUIENTE"),],
      [
        // pantalla 12
        new BotonRectangular(width / 4 * 3, height / 1.2, 140, 60, "SIGUIENTE"),],
        [
        // pantalla 13
        new BotonRectangular(width / 4 * 3, height / 1.2, 140, 60, "SIGUIENTE"),],
        [
        // pantalla 14
        new BotonRectangular(width / 4 * 3, height / 1.2, 140, 60, "REINICIAR"),],
        [
        // pantalla 15
        new BotonRectangular(width / 4 * 3, height / 1.2, 140, 60, "SIGUIENTE"),],
        [
        // pantalla 16
        new BotonRectangular(width / 4 * 3, height / 1.2, 140, 60, "REINICIAR"),],
        [
        // pantalla 17
        new BotonRectangular(width / 4 * 3, height / 1.2, 140, 60, "REINICIAR"),],
    ];
  }

  cambiarEstado(nuevoEstado) {
    this.estado = nuevoEstado;
  }

  dibujar() {
    this.pantallas[this.estado].dibujar();
    for (let boton of this.botonesPorPantalla[this.estado]) {
      boton.dibujar();
      if (this.enEstado12()) {
      this.j.actualizar();
      this.j.dibujar();
    }
   }
  }
enEstado12() {
    return this.estado === 12;
  }
  teclado() {
    this.j.teclado();
  }
  MousePresionado() {
    if (this.estado == 0) {
      if (this.botonesPorPantalla[this.estado][0].colision()) {
        this.cambiarEstado(1);
      }
    } else if (this.estado == 1) {
      if (this.botonesPorPantalla[this.estado][0].colision()) {
        this.cambiarEstado(2);
      }
    } else if (this.estado == 2) {
      if (this.botonesPorPantalla[this.estado][0].colision()) {
        this.cambiarEstado(3);
      }
    } else if (this.estado == 3) {
      if (this.botonesPorPantalla[this.estado][0].colision()) {
        this.cambiarEstado(4);
      }
    } else if (this.estado == 4) {
      if (this.botonesPorPantalla[this.estado][0].colision()) {
        this.cambiarEstado(5);
      }
    } else if (this.estado == 5) {
      if (this.botonesPorPantalla[this.estado][0].colision()) {
        this.cambiarEstado(6);
      }
    } else if (this.estado == 6) {
      if (this.botonesPorPantalla[this.estado][0].colision()) {
        this.cambiarEstado(7);
      }
    } else if (this.estado == 7) {
      if (this.botonesPorPantalla[this.estado][0].colision()) {
        this.cambiarEstado(8);
      }
    } else if (this.estado == 8) {
      if (this.botonesPorPantalla[this.estado][0].colision()) {
        this.cambiarEstado(9);
      }
    } else if (this.estado == 9) {
      if (this.botonesPorPantalla[this.estado][0].colision()) {
        this.cambiarEstado(10);
      }
      if (this.botonesPorPantalla[this.estado][1].colision()) {
        this.cambiarEstado(15);
      }
    } else if (this.estado == 10) {
      if (this.botonesPorPantalla[this.estado][0].colision()) {
        this.cambiarEstado(11);
      }
      if (this.botonesPorPantalla[this.estado][1].colision()) {
        this.cambiarEstado(13);
      }
    } else if (this.estado == 11) {
      if (this.botonesPorPantalla[this.estado][0].colision()) {
        this.cambiarEstado(12);
      }
    } else if (this.estado == 12) {
    if (this.botonesPorPantalla[this.estado][0].colision()) {
      this.cambiarEstado(17);
      }
    } else if (this.estado == 13) {
      if (this.botonesPorPantalla[this.estado][0].colision()) {
        this.cambiarEstado(14);
      }
    } else if (this.estado == 14) {
      if (this.botonesPorPantalla[this.estado][0].colision()) {
        this.cambiarEstado(0);
      }
    } else if (this.estado == 15) {
      if (this.botonesPorPantalla[this.estado][0].colision()) {
        this.cambiarEstado(16);
      }
    } else if (this.estado == 16) {
      if (this.botonesPorPantalla[this.estado][0].colision()) {
        this.cambiarEstado(0);
      }
    } else if (this.estado == 17) {
      if (this.botonesPorPantalla[this.estado][0].colision()) {
        this.cambiarEstado(0);
      }
    } 
  }
}
