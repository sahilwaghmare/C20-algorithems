var fixedrect
var movingrect
function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(400, 200, 50, 80);
  movingrect=createSprite(600, 300, 80, 50);
  fixedrect.shapeColor="green";
  fixedrect.debug=true;
  movingrect.shapeColor="green";
  movingrect.debug=true;
}

function draw() {
  background(0); 
  movingrect.x=mouseX;
  movingrect.y=mouseY; 
  if (movingrect.x-fixedrect.x<movingrect.width/2+fixedrect.width/2&&
  fixedrect.x-movingrect.x<movingrect.width/2+fixedrect.width/2&&
  movingrect.y-fixedrect.y<movingrect.height/2+fixedrect.height/2&&
  fixedrect.y-movingrect.y<movingrect.height/2+fixedrect.height/2){
    fixedrect.shapeColor="red";
    movingrect.shapeColor="blue";
  }
else{
  fixedrect.shapeColor="green";
  movingrect.shapeColor="green";
}
  drawSprites();
}