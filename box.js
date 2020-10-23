class Box{
constructor(x,y,width,height){
var options = {
'restitution':0,
'friction' : 0
}
this.body = Bodies.rectangle(x,y);
this.width = width;
this.height = height;

World.add(world,this.body)
}

display(){
push();
var pos = this.body.position;
fill(255)
rectMode(CENTER);
rect(pos.x,pos.y,this.width,this.height)
pop();

}



}