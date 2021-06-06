class Bird {
    constructor(x,y) {
        var option = {
            isStatic:false,
            restitution:1
        }

        this.body = Bodies.rectangle(x,y,75,75,option);
        this.width = 75;
        this.height = 75;
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill("red");
        strokeWeight(8);
        stroke("yellow");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
}