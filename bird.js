class Bird extends Baseclass {
    constructor(x,y)
    {
        super(x,y,50,50)
        this.image = loadImage("Assets/bird.png")
        this.smokeimage = loadImage("Assets/smoke.png")
        this.trajectory = []
    }
    display()
    {
        // this.body.position.x = mouseX
        // this.body.position.y = mouseY
        super.display()
        if(this.body.position.x > 250 && this.body.velocity.x > 10)
        {
        var position = [this.body.position.x, this.body.position.y]
        this.trajectory.push(position)
        }
        // console.log(this.trajectory)

        for(var i = 0; i < this.trajectory.length; i+= 1)
        {
            image(this.smokeimage, this.trajectory[i][0],this.trajectory[i][1])

        }
    }
}