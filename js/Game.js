class Game {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
    car1= createSprite(200,200);
    car2= createSprite(300,200);
   // car3= createSprite(500,200);
    //car4= createSprite(700,200);

    hurdleGroup=new Group();
    
    cars=[car1,car2]
  }

  play(){
    form.hide();
   
    Player.getPlayerInfo();

    if(allPlayers !== undefined){
     
      //index of the array
      var index=0;

      spawnHurdle();
      //x and y of the cars
      var x=0;
      var y;
      var z;
      for(var plr in allPlayers){
       
        //add 1 to the index for every loop
        index=index+1;

        //position the cars a little away from each other in x direction
        x=x+100;

        //use this data from the database to display the cars in y direction
        z=displayHeight-allPlayers[plr].distance; 
        y=displayWidth-allPlayers[plr].distance; 
     //   x = displayWidth - allPlayers[plr].distance;
        cars[index-1].x=x;
        cars[index-1].y=y;
        if(keyIsDown(RIGHT_ARROW) && player.index !== null){
         cars[index-1].velocityX=5
        }
        if(index===player.index){
          cars[index-1].shapeColor="red";
          camera.position.x=displayWidth/2;
          camera.position.y=cars[index-1].y;
        
        } 

      }
    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=50
      player.update();
}


  //hurdleGroup.add(hurdle);
 
   drawSprites();   
  }

}
