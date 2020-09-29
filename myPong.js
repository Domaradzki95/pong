


class Pong {
    constructor(canvas) {
        this.c = canvas;
        this.ctx = canvas.getContext('2d');
        this.ball = new Ball;
        this.ball.pos.x = 100;
        this.ball.pos.y = 200;

        this.ball.vel.x = 50;
        this.ball.vel.y= 100;

        this.players = [new Player,
                        new Player];
        this.players[0].pos.x = 40;
        this.players[1].pos.x = this.c.width - 40;
        this.players.forEach(player => {
            player.pos.y = this.c.height/2;
        })    
        let lastTime;
        const callback = (millis)=> {
        
        if(lastTime) {
            this.update((millis- lastTime)/1000);  
        }
        lastTime = millis;   
            requestAnimationFrame(callback);
        }
        callback();
    }
    draw() {
        this.ctx.fillStyle = "#2c3e50";
        this.ctx.fillRect(0,0,this.c.width,this.c.height);
        
        this.drawRect(this.ball);
        this.players.forEach(player =>this.drawRect(player));

    }

    drawRect(rect) {
        this.ctx.fillStyle = '#f1c40f';
        this.ctx.fillRect(rect.left,rect.top,
                          rect.size.x,rect.size.y);

    }
    update(dt) {  

    
        this.ball.pos.x += this.ball.vel.x * dt;
        this.ball.pos.y += this.ball.vel.y * dt;
    
        if (this.ball.left <0 || this.ball.right > this.c.width) {
            this.ball.vel.x =-this.ball.vel.x;
            console.log(this.ball.pos.x)
        }
        if (this.ball.top <0 || this.ball.bottom > this.c.height) {
            this.ball.vel.y =-this.ball.vel.y;
        }
        this.players[1].pos.y = this.ball.pos.y;
        this.draw();   

    }
}

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
    get left() {
        return this.pos.x - this.size.x /2; 
    }
    get right() {
        return this.pos.x + this.size.x /2; 
    }

    get top() {
        return this.pos.y - this.size.y /2;
        
    }
    get bottom() {
        return this.pos.y + this.size.y /2;
    }
}


class Ball extends Rect {
    constructor(){
        super(10,10);
        this.vel = new Vec();       
    }
}

class Player extends Rect {
    constructor() {
        super(20,100);
        this.score = 0;
    }
}



const canvas = document.getElementById('myPong');
canvas.width = 600;
canvas.height = 400;
const pong = new Pong(canvas);





addEventListener('mousemove', function(e){
   pong.players[0].pos.y = e.offsetY;
   
})

addEventListener('mousedown', function(){
    
    console.log(pong.players[0]);
})

