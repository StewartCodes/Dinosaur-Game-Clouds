var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var cloud
var timer

function preload() {
    trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
    trex_collided = loadImage("trex_collided.png");
    cloud = loadImage("cloud.png");
    groundImage = loadImage("ground2.png")
}

function setup() {
    createCanvas(600, 200);

    timer = setInterval(spawnClouds, 2000);

    //create a trex sprite
    trex = createSprite(50,160,20,50);
    trex.addAnimation("running", trex_running);
    trex.scale = 0.5;

    //create a ground sprite
    ground = createSprite(200,180,400,20);
    ground.addImage("ground",groundImage);
    ground.x = ground.width /2;
    ground.velocityX = -4;

    invisibleGround = createSprite(200, 190, 400, 20);
    invisibleGround.visible = false;

}

function draw() {
    background(220);

    //jump when the space button is pressed
    if (keyDown("space")) {
        if (trex.y > 150){
            trex.velocityY = -10;
        }
    }

    trex.velocityY = trex.velocityY + 0.8

    if (ground.x < 0) {
        ground.x = ground.width / 2;
    }
    // WAY 1
    // if (trex.y > 155){
    //     trex.y = 155
    // }

    // WAY 2
    trex.collide(invisibleGround);
   

    drawSprites();
 
}
// Spawning clouds
function spawnClouds(){
    var cloud = createSprite(700, Math.round(Math.random()*101), 50, 50);
    cloud.velocityX = -4;
}