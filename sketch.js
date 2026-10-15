const Engine = Matter.Engine 
const World = Matter.World 
const Bodies = Matter.Bodies 
const Body = Matter.Body
const Constraint = Matter.Constraint

var engine, world
var ground
var box1, box2, box3, box4, box5
var pig1, pig2
var log1, log2, log3, log4, log5
var bird1, bird2, bird3, bird4
var birds = []
var bg_img
var slingshot
var platform
var gamestate = "onsling"
var score = 0
var bird_flying, bird_select
var pig_snort

function preload()
{
    bg_img = loadImage("Assets/bg.png")
//     bird_flying = loadSound("./box-model-main/Assets/bird_flying.mp3")
//     bird_select = loadSound("./box-model-main/Assets/bird_select.mp3")
//     pig_snort = loadSound("./box-model-main/Assets/pig_snort.mp3")
}

function setup ()
{
    createCanvas (1200, 400)
    engine = Engine.create ()
    world = engine.world 

    ground = new Ground(600, height, 1200, 20)

    box1 = new Box(700, 320, 70, 70)

    box2 = new Box(920, 320, 70, 70)

    pig1 = new Pig(810, 350)

    log1 = new Log(800, 290, 300, PI/2)

    box3 = new Box(700, 240 ,70 , 70)

    box4 = new Box(920, 240 ,70 , 70)

    pig2 = new Pig(810, 220)

    log2 = new Log(810, 180, 300, PI/2)

    box5 = new Box(810, 160, 70, 70)

    log3 = new Log(760, 120, 150, PI/5)

    log4 = new Log(870, 120, 150, -PI/5)

    bird1 = new Bird(100, 100)

    bird2 = new Bird(150, 170)

    bird3 = new Bird(100, 170)

    bird4 = new Bird(50, 170)

    slingshot = new Slingshot(bird1.body, {x:200, y:50 })

    platform  = new Ground(150, 300, 300, 170)

    birds.push(bird4)
    birds.push(bird3)
    birds.push(bird2)
    birds.push(bird1)

    console.log(log2)
}

function draw ()
{
    background (bg_img)
    Engine.update (engine)
    noStroke()
    textSize(35)
    fill(255)
    text("Score:"+score, width-300, 50)
    ground.display()
    box1.display()
    box2.display()
    box3.display()
    box4.display()
    box5.display()
    pig1.display()
    pig1.score() 
    pig2.display()
    pig2.score()
    log1.display()
    log2.display()
    log3.display()
    log4.display()
    bird1.display()
    bird2.display()
    bird3.display()
    bird4.display()
    slingshot.display()
    platform.display()
}

function mouseDragged ()
{
    if(gamestate !== "launched")
    {
    Body.setPosition(birds[birds.length - 1].body, {x:mouseX ,y:mouseY })
    Body.applyForce(birds[birds.length - 1].body, birds[birds.length - 1].body.position, {x: 5, y: -5})
    return false 
    }
}

function mouseReleased ()
{
    if(gamestate === "onsling")
    {
    slingshot.flight()
    birds.pop()
    gamestate = "launched"
    return false
    }
}

// ASCII- American Standard Code for Information Interchange 
// https://cdn.shopify.com/s/files/1/1014/5789/files/Standard-ASCII-Table_large.jpg?10669400161723642407

function keyPressed()
{
    if(keyCode === 32 && gamestate === "launched")
    {
        Body.setPosition(birds[birds.length - 1].body, {x:200, y:50})
        slingshot.attached(birds[birds.length - 1].body)
        gamestate = "onsling"
    }
}
// Examples on different datatypes in JavaScript

// String
var name = "Ethan"
console.log(name)

// Number
var x = 627
console.log(x)

// Boolean
var ultron = true
console.log(ultron)

// Undefined
var object
console.log(object)

// Null
object = null
console.log(object)

// Array: a datatype that holds multiple values, Array is created inside Square brackets!
// and can store a list of same or different types of data seperated by a comma
// EXAMPLES
// An array holding same datatype
var arr1 = [38, 234, 1009, 68, 1]
console.log(arr1)
console.log(arr1[2])

var arr2 = ["Ethan", 27, true]
console.log(arr2)

var arr3 = [[5, 7], [10,13,15], [200, 70]]
console.log(arr3)
console.log(arr3[2][0])

var arr4 = []
console.log(arr4)

arr2.push("Pearl")
console.log(arr2)

arr2.push(37)
arr2.push(500)
console.log(arr2)

arr2.pop()
console.log(arr2)

