var bg, bg_image;
var player,player_image;


function preload() {
    bg_image = loadImage("bg.jpg");
    player_image = loadImage("doraemon.png");
    // =====PLAYING CHARACTER=====
  

}

function setup() {
    createCanvas(1200, 700);

    bg = createSprite(900, 380);
    bg.addImage(bg_image);
    bg.scale = 0.257;
    // if scale decrease, then other values such as image length increases

    player = createSprite(200,540);
    player.addImage(player_image);
    player.scale = 0.8
        
   

}

function draw() {
    background(0);

    if(keyDown("UP_ARROW")){
        player.y = player.y - 4;
      
      }
      if(keyDown("DOWN_ARROW")){
        player.y = player.y + 4;
      
      }
      
        
      if(keyDown("LEFT_ARROW")){
        player.x = player.x - 4;
       
      }
      if(keyDown("SPACE")){
        player.x = player.x + 4;
      
      }





    
drawSprites();
   
}