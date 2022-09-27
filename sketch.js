
let speedX = 5;
let speedY = 5;
let isMousePressed = false;
let transparency = 255;

class bez
{

  constructor(xAnch, yAnch, xCon, yCon, x2Con, y2Con, x2Anch, y2Anch, r, g, b, xDirection,yDirection )
  {
    this.xAnch = xAnch;
    this.yAnch = 0;
    this.xCon = xCon;
    this.yCon = yCon;
    this.x2Con = x2Con;
    this.y2Con = y2Con;
    this.x2Anch = x2Anch;
    this.y2Anch = y2Anch;
    this.r = r;
    this.g = g;
    this.b = b;
    this.xDirection = xDirection; 
    this.yDirection = yDirection;
  }

  displayB()
  {
    fill(this.r, this.g, this.b, transparency );
    bezier(this.xAnch, this.yAnch, this.xCon, this.yCon, this.x2Con, this.y2Con, this.x2Anch, this.y2Anch);

  }

  moveB()
  {
      if(isMousePressed == false)
      {
        this.xAnch =this.xAnch + (speedX * this.xDirection);
        this.x2Anch = this.x2Anch + (speedX * this.xDirection);
        this.yAnch =this.yAnch + (speedY * this.yDirection);
      }
      if(isMousePressed == true)
      {
        this.xAnch = this.xAnch - (speedX * this.xDirection);
        this.x2Anch = this.x2Anch - (speedX * this.xDirection);
        this.yAnch =this.yAnch - (speedY * this.yDirection);
      }
      

      //this.xAnch = this.xAnch + speedX;
      //this.x2Anch = this.x2Anch + speedX;
      if((this.xAnch > windowWidth || this.xAnch < 0) || (this.x2Anch > windowWidth || this.x2Anch < 0))
      {
          this.xDirection *= -1;
          /*this.r -= 15;
          this.b -=15;
          this.g -= 15;
          */

        

      }
      
      
     
      
      if((this.yAnch > windowHeight || this.yAnch < 0) || (this.y2Anch > windowHeight || this.y2Anch < 0))
      {
        
        this.yDirection *= -1;
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







let many = [];
j = 0;
let num = 100;
for(j; j < num; j++)
{
  many[j] = new bez(j*2, j*3, 1, 100, 100, 1, j*2, j*3,142, 125, 190, 1, 1);
}

let curves = [];
m = 0;
let nums = 100;
for(m; m < nums; m++)
{
  curves[m] = new bez(m*2, m*3, 800, 10, 600, 40, m*2, m*3, 241, 227, 211,1, 1);
}

let fr = 60;

let bb = new bez(300, 200, 1400, 1800, 1500, 888, 200, 300, 153, 193, 185,1, 1);
let tree = new bez(200, 100, 30, 1300, 700, 1400, 800, 200,  242, 208, 169,1, 1);
let air = new bez(100, 0, 1500, 100, 1540, 150, 0, 100, 216, 140, 154,1, 1);


let crcl = new ball(100, 100, 100, 50, 2, 3, 10, 10, 10);
let b1 = new bez(400, 300, 1500, 800, 1400, 850, 500, 600, 10, 10,1, 1);
let low = new bez(50, 400, 80, 700, 90, 750, 100, 500, 255, 255, 255, 1, 1 );

function setup() {
    createCanvas(windowWidth, windowHeight);
    //top left is (0,0) origin point 
    
    frameRate(fr);
   

  }
  
 

  function draw() {
    background(0);

    if (mouseIsPressed == true) {

      isMousePressed = true;
      speedX = 1;
      speedY = 1;
      transparency = 100;
    } 
    else
    {
      isMousePressed = false; 
      speedX = 20;
      speedY = 20;
      transparency = 255;
    }

    air.displayB();
    air.moveB();
    for(k = 0; k < nums; k++)
    {
      curves[k].displayB();
      curves[k].moveB();
  
    }
    
    for(i = 0; i < num; i++){

      many[i].displayB();
      many[i].moveB();
     }


   
     low.displayB();
    bb.displayB();
    tree.displayB();


    low.moveB();
    bb.moveB();
    

    tree.moveB();



  
   
  
 

  
    
    

   
    
    
  
   
   

   
    

    
    

   
  



}








