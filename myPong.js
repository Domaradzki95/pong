const canvas = document.getElementById('myPong');
const ctx = canvas.getContext('2d');


canvas.width = 600;
canvas.height = 400;

let cW= canvas.width;
let cH = canvas.height;

ctx.fillStyle = "#2c3e50";
ctx.fillRect(0,0,cW,cH);

class Vec {
    constructor(x=0,y=0) {
        this.x=x;
        this.y=y;
    }
}


class Rect {
    constructor(w,h) {
        this.pos = new Vec;
        this.size = new Vec(w,h);
    }
}

class Ball extends Rect {
    constructor(){
        super(10,10);
        this.vel = new Vec();       
    }
}


let ball = new Ball;
ball.pos.x = 100;
ball.pos.y = 200;
console.log(ball);

ctx.fillStyle = '#f1c40f';
ctx.fillRect(ball.pos.x,ball.pos.y,ball.size.x,ball.size.y);

let lastTime;
function callback(millis) {
    
    
   if(lastTime) {
    update((millis- lastTime)/1000);  
   }
   lastTime = millis;   
    requestAnimationFrame(callback);
}

function update(dt) {
    ctx.clearRect(0,0,cW,cH);
    ctx.fillStyle = "#2c3e50";
    ctx.fillRect(0,0,cW,cH);
    ctx.fillStyle = '#f1c40f';
    ctx.fillRect(ball.pos.x,ball.pos.y,ball.size.x,ball.size.y);
    ball.vel.x = 50;
    ball.pos.x+= ball.vel.x * dt;
    console.log(dt);
}

callback();