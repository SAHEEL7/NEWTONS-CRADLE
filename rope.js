class Rope{
	constructor(body1,body2,pointA,pointB)
	{
this.pointA = pointA;
this.pointB = pointB
var options = {
	bodyA:body1,
	bodyB:body2,
	pointB:{x:this.pointA,y:this.pointB}
}

this.rope = Matter.Constraint.create(options);

World.add(world,this.rope)
	}
display() {
	line(this.rope.bodyA.position.x,this.rope.bodyA.position.y,this.rope.bodyB.position.x,this.rope.bodyB.position.y)
}



}
 