var game = {
    score: 0,
    level: 1
};

function RiverRaid(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.score = 0;
    this.level = 1;

    this.update = this.update.bind(this);
    this.render = this.render.bind(this);
    this.keyDown = this.keyDown.bind(this);
    this.keyUp = this.keyUp.bind(this);

    document.addEventListener("keydown", this.keyDown);
    document.addEventListener("keyup", this.keyUp);

    this.player = new Player(this, 400, 500, 30, 30);
    this.bullets = [];
    this.obstacles = [];
    
    this.spawnObstacles();
    this.update();
}

RiverRaid.prototype.keyDown = function(event) {
    switch (event.keyCode) {
        case 37: // Left arrow
            this.player.moveLeft = true;
            break;
        case 39: // Right arrow
            this.player.moveRight = true;
            break;
        case 38: // Up arrow
            this.player.moveUp = true;
            break;
        case 40: // Down arrow
            this.player.moveDown = true;
            break;
        case 32: // Spacebar
            this.player.fireBullet();
            break;
    }
};

RiverRaid.prototype.keyUp = function(event) {
    switch (event.keyCode) {
        case 37: // Left arrow
            this.player.moveLeft = false;
            break;
        case 39: // Right arrow
            this.player.moveRight = false;
            break;
        case 38: // Up arrow
            this.player.moveUp = false;
            break;
        case 40: // Down arrow
            this.player.moveDown = false;
            break;
    }
};

function Player(game, x, y, width, height) {
    this.game = game;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speed = 5;
    this.moveLeft = false;
    this.moveRight = false;
    this.moveUp = false;
    this.moveDown = false;
}

Player.prototype.update = function() {
    if (this.moveLeft) {
        this.x -= this.speed;
    }
    if (this.moveRight) {
        this.x += this.speed;
    }
    if (this.moveUp) {
        this.y -= this.speed;
    }
    if (this.moveDown) {
        this.y += this.speed;
    }

    if (this.x < 0) {
        this.x = 0;
    }
    if (this.x + this.width > this.game.canvas.width) {
        this.x = this.game.canvas.width - this.width;
    }
    if (this.y < 0) {
        this.y = 0;
    }
    if (this.y + this.height > this.game.canvas.height) {
        this.y = this.game.canvas.height - this.height;
    }
};



Player.prototype.render = function(ctx) {
    const bodyTopX = this.x + this.width / 2;
    const bodyTopY = this.y;
    const bodyBottomX = this.x + this.width / 2;
    const bodyBottomY = this.y + this.height;
    const diamondLeftTopX = this.x;
    const diamondLeftTopY = this.y + this.height * 0.2;
    const diamondLeftBottomX = this.x;
    const diamondLeftBottomY = this.y + this.height * 0.8;
    const diamondRightTopX = this.x + this.width;
    const diamondRightTopY = this.y + this.height * 0.2;
    const diamondRightBottomX = this.x + this.width;
    const diamondRightBottomY = this.y + this.height * 0.8;
    const connectingLineX = this.x + this.width / 2;
    const connectingLineYTop = diamondLeftTopY + (diamondRightTopY - diamondLeftTopY) / 2;
    const connectingLineYBottom = diamondLeftBottomY + (diamondRightBottomY - diamondLeftBottomY) / 2;
  
    // Render the shape
    ctx.beginPath();
    ctx.moveTo(bodyTopX, bodyTopY);
    ctx.lineTo(diamondLeftTopX + this.width * 0.2, diamondLeftTopY);
    ctx.lineTo(diamondLeftTopX, diamondLeftTopY + this.height * 0.1);
    ctx.lineTo(diamondLeftTopX - this.width * 0.2, diamondLeftTopY);
    ctx.lineTo(bodyTopX, bodyTopY);
    ctx.closePath();
    ctx.fillStyle = "#0074D9";
    ctx.fill();
  
    ctx.beginPath();
    ctx.moveTo(bodyBottomX, bodyBottomY);
    ctx.lineTo(diamondLeftBottomX + this.width * 0.2, diamondLeftBottomY);
    ctx.lineTo(diamondLeftBottomX, diamondLeftBottomY - this.height * 0.1);
    ctx.lineTo(diamondLeftBottomX - this.width * 0.2, diamondLeftBottomY);
    ctx.lineTo(bodyBottomX, bodyBottomY);
    ctx.closePath();
    ctx.fillStyle = "#0074D9";
    ctx.fill();
  
    ctx.beginPath();
    ctx.moveTo(bodyTopX, bodyTopY);
    ctx.lineTo(diamondRightTopX - this.width * 0.2, diamondRightTopY);
    ctx.lineTo(diamondRightTopX, diamondRightTopY + this.height * 0.1);
    ctx.lineTo(diamondRightTopX + this.width * 0.2, diamondRightTopY);
    ctx.lineTo(bodyTopX, bodyTopY);
    ctx.closePath();
    ctx.fillStyle = "#0074D9";
    ctx.fill();
  
    ctx.beginPath();
    ctx.moveTo(bodyBottomX, bodyBottomY);
    ctx.lineTo(diamondRightBottomX + this.width * 0.2, diamondRightBottomY);
    ctx.lineTo(diamondRightBottomX, diamondRightBottomY - this.height * 0.1);
    ctx.lineTo(diamondRightBottomX - this.width * 0.2, diamondRightBottomY);
    ctx.lineTo(bodyBottomX, bodyBottomY);
    ctx.closePath();
    ctx.fillStyle = "#0074D9";
    ctx.fill();
  
    ctx.beginPath();
    ctx.moveTo(connectingLineX, connectingLineYTop);
    ctx.lineTo(connectingLineX, connectingLineYBottom);
    ctx.lineWidth = 8;
    ctx.strokeStyle = "#ffffff";
    ctx.stroke();
  };
  







Player.prototype.fireBullet = function() {
    var bullet = new Bullet(this.x + this.width / 2 - 1, this.y - 10, 10);
    this.game.bullets.push(bullet);
};

function Obstacle(x, y, width, height, speed, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speed = speed || 1;
    this.color = color || "#00ff00";
}



    Obstacle.prototype.update = function() {
        this.y += this.speed;
        };
        
        Obstacle.prototype.render = function(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
        };
        
        function Bullet(x, y, speed) {
        this.x = x;
        this.y = y;
        this.width = 2;
        this.height = 10;
        this.speed = speed;
        }
        
        Bullet.prototype.update = function() {
        this.y -= this.speed;
        };
        
        Bullet.prototype.render = function(ctx) {
        ctx.fillStyle = "#ff0000";
        ctx.fillRect(this.x, this.y, this.width, this.height);
        };
        
        
        RiverRaid.prototype.spawnObstacles = function() {
            const obstacleWidth = 50;
            const obstacleHeight = 10;
            const verticalSpacing = 200;
        
            setInterval(() => {
                const numObstacles = Math.floor(Math.random() * 3) + 2;
        
                const randomXPositions = [];
                for (let j = 0; j < numObstacles; j++) {
                    let randomX;
                    do {
                        randomX = Math.floor(Math.random() * (this.canvas.width - obstacleWidth));
                    } while (randomXPositions.some(x => Math.abs(x - randomX) < obstacleWidth));
        
                    randomXPositions.push(randomX);
                }
        
                for (let j = 0; j < numObstacles; j++) {
                    const x = randomXPositions[j];
                    const y = -obstacleHeight;
        
                    const speed = Math.floor(Math.random() * 3) + 1;
                    const color = ["#00ff00", "#ff0000", "#ffff00"][Math.floor(Math.random() * 3)];
        
                    const obstacle = new Obstacle(x, y, obstacleWidth, obstacleHeight, speed, color);
                    this.obstacles.push(obstacle);
                }
            }, 1000);
        };
        
        
        
        
        RiverRaid.prototype.checkCollisions = function() {
        // Implement collision detection logic here
        };
        
        RiverRaid.prototype.update = function() {
            this.player.update();
        
            for (var i = 0; i < this.bullets.length; i++) {
                this.bullets[i].update();
            }
        
            for (var i = 0; i < this.obstacles.length; i++) {
                this.obstacles[i].update();
            }
        
            this.checkCollisions();
        
            this.render(); // Add this line to call the render function.
            requestAnimationFrame(this.update);
        };
        
        
        RiverRaid.prototype.render = function() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
       
        this.player.render(this.ctx);
        
        for (var i = 0; i < this.bullets.length; i++) {
            this.bullets[i].render(this.ctx);
        }
        
        for (var i = 0; i < this.obstacles.length; i++) {
            this.obstacles[i].render(this.ctx);
        }
        };










        window.addEventListener("load", function() {
            var canvas = document.getElementById("gameCanvas");
            var riverRaid = new RiverRaid(canvas);
            requestAnimationFrame(riverRaid.update);
        });
        








