
class bez
{

  constructor(xAnch, yAnch, xCon, yCon, x2Con, y2Con, x2Anch, y2Anch, xSpeed, ySpeed, r, g, b )
  {
    this.xAnch = xAnch;
    this.yAnch = yAnch;
    this.xCon = xCon;
    this.yCon = yCon;
    this.x2Con = x2Con;
    this.y2Con = y2Con;
    this.x2Anch = x2Anch;
    this.y2Anch = y2Anch;
    this.xSpeed = xSpeed;
    this.ySpeed = ySpeed;
    this.r = r;
    this.g = g;
    this.b = b;
  }

  displayB()
  {
    fill(this.r, this.g, this.b);
    bezier(this.xAnch, this.yAnch, this.xCon, this.yCon, this.x2Con, this.y2Con, this.x2Anch, this.y2Anch);

  }

  moveB()
  {
      this.xAnch = this.xAnch + this.xSpeed;
      this.x2Anch = this.x2Anch + this.xSpeed;
      if((this.xAnch > windowWidth || this.xAnch < 0) || (this.x2Anch > windowWidth || this.x2Anch < 0))
      {
          this.xSpeed *= -1;
          this.r -= 15;
          this.b -=15;
          this.g -= 15;

          fr +=10;

      }

      this.yAnch = this.yAnch + this.ySpeed;
      
      if((this.yAnch > windowHeight || this.yAnch < 0) || (this.y2Anch > windowHeight || this.y2Anch < 0))
      {
          this.ySpeed *= -1;

      }
      
      
  }

}

class ball
{
  constructor(circlex, circley, diameter, radius, speedCX, speedCY, clrR, clrB, clrG)
  {
    this.circlex = circlex;
    this.circley = circley;
    this.diameter = diameter;
    this.radius = radius;
    this.speedCX = speedCX;
    this.speedCY = speedCY;
    this.clrR = clrR;
    this.clrB = clrB;
    this.clrG = clrG;

  }

  displayC()
  {
    fill(this.clrR, this.clrB, this.clrG);
    circle(this.circlex, this.circley, this.diameter);

  }

  moveC()
  {
    this.circley = this.circley + this.speedCY; 

    if(this.circley > (windowHeight-this.radius) || this.circley < (0 + this.radius))
    {
      this.speedCY = this.speedCY * -1;
      this.clrR += 50;
      this.clrB +=20;
      this.clrG += 30;
      
    }

    this.circlex = this.circlex + this.speedCX;

    if(this.circlex > (windowWidth - this.radius) || this.circlex < 0)
    {
  
  
      this.speedCX = this.speedCX * -1;
    }
  }


}


class Block
{
  constructor(x, y, width, height, speedX, speedY, clr)
  {

    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speedX = speedX;
    this.speedY = speedY; 
    this.clr = clr;

  }

    display() 
  {
    fill(255);
    rect(this.x, this.y, this.width, this.height);
  
    
  }

  move()
  {
    this.x = this.x + this.speedX;
    if(this.x > (windowWidth - this.width) || this.x <= 0)
    {
      this.speedX = this.speedX * -1;

    }
    this.y = this.y + this.speedY;
    if(this.y > (windowHeight - this.height) || this.y <= 0)
    {

      this.speedY = this.speedY * -1;
    }

  }

}






let many = [];
j = 0;
let num = 100;
for(j; j < num; j++)
{
  many[j] = new bez(j*2, j*3, 1, 100, 100, 1, j+100, j+150, 5, 5, 142, 125, 190);
}

let curves = [];
m = 0;
let nums = 100;
for(m; m < nums; m++)
{
  curves[m] = new bez(j*3, j*4, 800, 10, 600, 40, j*2, j*3, 7, 6, 241, 227, 211);
}

let fr = 60;

let bb = new bez(200, 80, 900, 500, 700, 400, 300, 700, 4, 5, 153, 193, 185);
let tree = new bez(900, 90, 30, 500, 500, 30, 100, 500, 3, 2, 242, 208, 169);
let air = new bez(10, 50, 500, 80, 80, 500, 50, 10, 2, 3, 216, 140, 154);


let crcl = new ball(100, 100, 100, 50, 2, 3, 10, 10, 10);
let b1 = new bez(300, 400, 1, 100, 100, 1, 600, 500, 10, 10);

function setup() {
    createCanvas(windowWidth, windowHeight);
    //top left is (0,0) origin point 
    
    frameRate(fr);

  }
  
 

  function draw() {
    background(0);
    
    for(i = 0; i < num; i++){

      many[i].displayB();
      many[i].moveB();
     }


    bb.displayB();
    tree.displayB();
    air.displayB();
    bb.moveB();
    tree.moveB();
    air.moveB();
  

  
   
  
  for(k = 0; k < nums; k++)
  {
    curves[k].displayB();
    curves[k].moveB();

  }

  
    
    

   
    
    
  
   
   

   
    

    
    

   
  



}








