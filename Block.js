class Block {
    constructor(x, y, w, h, c) {
        var options = {
            restitution: 0.8,
            friction: 1,
            density: 1.2
        }
        this.body = Bodies.rectangle(x, y, w, h, options)
        this.width = w;
        this.height = h;
        this.color = c;
        this.visibility = 255;
        World.add(world, this.body);
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;
        if (this.body.speed < 3) {
            push();
            fill(this.color);
            rotate(angle);
            rectMode(CENTER)
            rect(pos.x, pos.y, this.width, this.height);
            pop();
        } else {
            push();
            this.visibility = this.visibility - 5;
            World.remove(world, this.body);
            pop();
        }
    }
}