//renzo cattaneo y juliana alzola

function preload() {
imagenFondo = loadImage("data/fondo.png");
imagenPiedra = loadImage("data/piedra.png");
imagenArbol = loadImage("data/arbol.png");
imagenPersonaje = loadImage("data/personaje.gif");
}
    
function setup() {
  createCanvas(600, 600);
  estado = new Estado();
}

function draw() {
  estado.dibujar();
}
function mousePressed() {
  estado.MousePresionado();
}
function keyPressed(){
  estado.teclado();
}
