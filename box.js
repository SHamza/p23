class Box{
 constructor(x,y,width,height){
  this.body=Bodies.rectangle(x,y,width,height,{friction:3,density:1.4,isStatic:true});
  this.w=width;
  this.h=height; 
  


 }
display(){
    var pos=this.body.position;
    
    
    
    rectMode(CENTER);
    fill("white");
    rect(pos.x,pos.y,this.w,this.h);
    
}


}