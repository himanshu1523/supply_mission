class Box{
  Counstructure(x,y,w,h){
   this.x=x;
   this.y=y;
   this.width=w;
   this.height=h;
   var option={
     isStatic:true
   }
  this.body=Bodies.rectangle(this.x,this.y,this.width,this.height,option);

  World.add(World,this.body);
}
display(){
  var pos = this.body.position;
rectMode(CENTER);   
fill(200);
rect(pos.x,pos.y,this.width,this.height);
Pop();      
  }
}