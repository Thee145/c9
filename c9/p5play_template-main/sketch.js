var box;
function setup() {
  
  createCanvas(500,600);
  box = createSprite(200, 200, 60, 20);
}

function draw() 
{
  background(30);
  drawSprites();

  if(keyIsDown(RIGHT_ARROW))
  {
      box.position.x +=5;
  }
  if(keyIsDown(LEFT_ARROW)) {

    box.position.x -=5
  }

}




