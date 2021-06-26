var fundo,imgdofundo
var cat,mouse
var cat1,cat2,cat3
var ms1,ms2,ms3,ms4

function preload() {
 imgdofundo=loadImage("garden.png")
 cat1=loadAnimation("cat1.png")
 cat2=loadAnimation("cat2.png","cat3.png")
 cat3=loadAnimation("cat4.png")
 ms1=loadAnimation("mouse1.png")
 ms2=loadAnimation("mouse2.png","mouse3.png")
 ms3=loadAnimation("mouse4.png")



}

function setup(){
    createCanvas(1000,800);
    //crie os sprites de gato e rato aqui
    cat = createSprite(870,600)
    cat.addAnimation("gatoSentado",cat1)
    cat.scale = 0.2
    mouse=createSprite(200,600)
    mouse.addAnimation("rato",ms1)
    mouse.scale = 0.15
}

function draw() {

    background(imgdofundo);
    //Escreva a condição aqui para avaliar se o gato e o rato colidem
   if(cat.x - mouse.x < (cat.width - mouse.width)/2){
       cat.velocityX=0;
       cat.addAnimation("cat3",cat3);
       cat.changeAnimation("cat3");
       cat.x = 300;
       cat.scae=0.2;
       mouse.addAnimation("ms3", ms3);
       mouse.scale = 0.15
       mouse.changeAnimation("ms3");
   }
    drawSprites();
}


function keyPressed(){

  //Para mover e alterar a animação, escreva o código aqui
  if(keyCode === LEFT_ARROW){
    cat.velocityX = -5;
    cat.addAnimation("cat2",cat2) 
    cat.changeAnimation("cat2");

    mouse.addAnimation("ratoProvocando", ms2);
    mouse.changeAnimation("ratoProvocando")
    mouse.frameDelay = 25; 

    
  }

}
