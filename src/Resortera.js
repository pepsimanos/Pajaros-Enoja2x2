class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.sling1 = loadImage("sprites/sling1.png");
        this.sling2 = loadImage("sprites/sling2.png");
        this.sling3 = loadImage("sprites/sling3.png");
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.sling1,200,20)
        image(this.sling2,175,20)
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            stroke(48,28,8);
            if(pointA.x < 200){
                strokeWeight(7);
                line(pointA.x-25, pointA.y+5, pointB.x-5 , pointB.y+5);
                line(pointA.x-25, pointA.y+5, pointB.x+35, pointB.y+5);
                imageMode(CENTER);
                image(this.sling3,pointA.x-25,pointA.y+5,15,30);
            } else {
                strokeWeight(2);
                line(pointA.x-25, pointA.y+5, pointB.x-5 , pointB.y+5);
                line(pointA.x-25, pointA.y+5, pointB.x+35, pointB.y+5);
                imageMode(CENTER);
                image(this.sling3,pointA.x-25,pointA.y+5,15,30);
            }
            pop();
        }
    }
}