var box1;


function setup() 
{
  createCanvas(400, 400);
  box1 = new Box();
  box2= new Box ();
  box2.w=100;
}

function draw() 
{
  background(220);
  box1.show();
  box2.show();
  box1.set_speed(2);
}

