

function preload(){
  fondoImg = loadImage("fondo.jpg");
  bombaImg = loadImage("bomba.png")
  estrellaImg = loadImage("estrella.png");
  florImg = loadImage("flor.png");
  goombaImg = loadImage("goomba.png");
  hongoImg = loadImage("hongo.png");
  marioImg =loadImage("mario.png");
  monedaImg =loadAnimation("moneda.png");
  vidaImg =loadAnimation("vida.png");
  tortugaImg =loadAnimation("tortuga.png");
}

function setup(){  
  createCanvas(500,600);

  fondo=createSprite(250,200);
  fondo.addImage(fondoImg);
  fondo.scale=1;

}

function draw() {

}

function generaAmigos() {


}

function generaEnemigos() {
  

}
