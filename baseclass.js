class Baseclass {
    constructor(x,y,w,h,angle)
    {
        this.x = x
        this.y = y
        this.w = w
        this.h = h

        var options = {
            restitution: 0.8,
            friction: 1,
            density:1,
            airFriction: 0,
            frictionStatic:1
        }

        this.body = Bodies.rectangle (this.x, this.y, this.w, this.h, options)
        this.image = loadImage("Assets/base.png")
        World.add(world, this.body)
    }

    display()
    {
        var pos = this.body.position
        var angle = this.body.angle
        push()
        translate(pos.x, pos.y)
        rotate(angle)
        imageMode(CENTER)
        image(this.image, 0,0, this.w, this.h)
        pop()
    }
}