class Bhoot{
    constructor(x, y, width, height) {
       
        this.x = x
        this.y = y
        this.width = width;
        this.height = height;
       // this.image = loadImage("sprites/base.png");
        
      }
      display(){
        
        
        rect( this.x,this.y, this.width, this.height);
        
      }
    }