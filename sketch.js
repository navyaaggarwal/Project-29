const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function preload() {
    rockimg = loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(900,400);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);

    ground = new Ground();
    stand1 = new Stand(390,300,250,10);
    stand2 = new Stand(700,200,200,10);
    ball = Bodies.circle(50,200,20);
    World.add(world,ball);

    box1 = new Box(300,275,30,40);
    box2 = new Box(330,275,30,40);
    box3 = new Box(360,275,30,40);
    box4 = new Box(390,275,30,40);
    box5 = new Box(420,275,30,40);
    box6 = new Box(450,275,30,40);
    box7 = new Box(480,275,30,40);

    box8 = new Box(330,235,30,40);
    box9 = new Box(360,235,30,40);
    box10 = new Box(390,235,30,40);
    box11 = new Box(420,235,30,40);
    box12 = new Box(450,235,30,40);

    box13 = new Box(360,195,30,40);
    box14 = new Box(390,195,30,40);
    box15 = new Box(420,195,30,40);

    box16 = new Box(390,155,30,40);

    boxs1 = new Box(640,175,30,40);
    boxs2 = new Box(670,175,30,40);
    boxs3 = new Box(700,175,30,40);
    boxs4 = new Box(730,175,30,40);
    boxs5 = new Box(760,175,30,40);

    boxs6 = new Box(670,135,30,40);
    boxs7 = new Box(700,135,30,40);
    boxs8 = new Box(730,135,30,40);

    boxs9 = new Box(700,95,30,40);
   

    slingshot1 = new SlingShot(this.ball, {x: 100, y: 200});

}

function draw() {
    background(56,44,44);
    imageMode(CENTER);
    image(rockimg, ball.position.x, ball.position.y, 40, 40);
    stand1.display();
    stand2.display();
    ground.display();

    fill("skyblue");
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();

    boxs1.display();
    boxs2.display();
    boxs3.display();
    boxs4.display();
    boxs5.display();

    fill("pink");
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();

    boxs6.display();
    boxs7.display();
    boxs8.display();

    fill("turquoise");
    box13.display();
    box14.display();
    box15.display();

    boxs9.display();

    fill("grey");
    box16.display();

    slingshot1.display();


}

function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
    //}
}


function mouseReleased(){
    slingshot1.fly();

}
