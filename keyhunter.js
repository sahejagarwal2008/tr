class KeyHunter{
    constructor(x, y, width, height) {
      
        this.y = y
        this.x = x
        this.width = width;
        this.height = height;
       // this.image = loadImage("sprites/base.png");
       
      }
    
      display(){
       
        rect( this.x,this.y, this.width, this.height);
        
      }
};