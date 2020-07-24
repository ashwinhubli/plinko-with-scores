
  const Events = Matter.Events;
  const Engine = Matter.Engine;
  const World= Matter.World;
  const Bodies = Matter.Bodies;

  var particles = [];
  var plinkos = [];
  var divisions = [];

  var divisionHeight=300;
  var score =0;

  var gameState = "start";

  var particle;
  var turn=0;
  

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  
   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }
 
    

    
}
 


function draw() {
  background("black");
  textSize(20)
 text("Score : "+score,20,30);
  Engine.update(engine);
 
  fill("yellow");
  textSize(30);
  text("500",15,520);
  text("500",95,520);
  text("500",175,520);
  text("500",255,520);
   
  fill("blue");
  textSize(30);
  text("200",335,520);
  text("200",415,520);
  text("200",495,520);
  
  fill("red");
  textSize(30);
  text("100",575,520);
  text("100",655,520);
  text("100",735,520);

  for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(particle!=null)
   {
     particle.display();
 
     if(particle.body.position.y>760){
          if(particle.body.position.x < 300){
            score = score + 500;
            particle=null;
             if(score>=2500) {
               gameState="end";
     
              }
              if(turn>=5) {
                gameState="end";
               }
          }
     }
   }
   if(particle!=null)
   {
     particle.display();
 
     if(particle.body.position.y>760){
          if(particle.body.position.x < 550){
            score = score + 200;
            particle=null;
             if(score>=2500) {
               gameState="end";
     
              }
              if(turn>=5) {
                gameState="end";
                 
               }
          }
     }
   }
   if(particle!=null)
   {
     particle.display();
 
     if(particle.body.position.y>760){
          if(particle.body.position.x < 800){
            score = score + 100;
            particle=null;
             if(score>=2500) {
               gameState="end";
     
              }
              if(turn>=5) {
                gameState="end";
                 
               }
          }
     }
   }
   if(gameState ==="end"){
    textSize(35);
    fill("purple");
    text("Your final score is:"+score,230,250); 
    fill("white");
    textSize(65);
    text("GameOver",250,150); 
   }
   //if(frameCount%60===0){
     //particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     //score++;
   //}
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
 
   
}
function mousePressed()
{
if(gameState!=="end")
{

  particle = new Particle(mouseX, 10, 10, 10);
  turn = turn + 1;
 // score++;
 
} 


}