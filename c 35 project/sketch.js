var balloon,balloonImage1,balloonImage2;
var database , position;
// create database and position variable here

function preload(){
   bg =loadImage("cityImage.png");
   balloonImage1=loadAnimation("hotairballoon1.png");
   balloonImage2=loadAnimation("hotairballoon1.png","hotairballoon1.png",
   "hotairballoon1.png","hotairballoon2.png","hotairballoon2.png",
   "hotairballoon2.png","hotairballoon3.png","hotairballoon3.png","hotairballoon3.png");
  }

//Function to set initial environment
function setup() {
  database=firebase.database();
  createCanvas(1500,700);

  balloon=createSprite(250,450,150,150);
  balloon.addAnimation("hotAirBalloon",balloonImage1);
  var balloonPosition=database.ref('balloon/position');
  balloonPosition.on("value",readPosition)
  balloon.scale=0.5;

  textSize(20); 
}

function draw() {
  background(bg);

  if(keyDown(LEFT_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    //write code to move air balloon in left direction
  }
  else if(keyDown(RIGHT_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    //write code to move air balloon in right direction
  }

  if(keyDown(LEFT_ARROW)){
    balloon.x=balloon.x-5;
  }

  if(keyDown(RIGHT_ARROW)){
    balloon.x=balloon.x+5;
  }

  drawSprites();

 
  fill(0);
  stroke("white");
  textSize(25);
  text("**Use arrow keys to move Hot Air Balloon!",40,40);
}
function readPosition(data){
  position=data.val();
  console.log(position.x)
  balloon.x=position.x;
  balloon.y=position.y
}

function changePosition(x,y){
  database.ref('balloon/position').set({
    'x' : balloon.x + x,
    'y' : balloon.y + y
  })
}
function showError(){
  console.log("Error in code")
}
