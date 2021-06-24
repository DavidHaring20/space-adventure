class Star {
    constructor(x, y, width, height, opacity) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.opacity = opacity;
    }

    draw() {
        context.beginPath();
        context.globalAlpha = this.opacity;
        context.fillStyle = 'white';
        context.fillRect(this.x, this.y, this.width, this.height);
        context.closePath();
    }

    move() {
        if (this.x < canvas.width / 2 && this.y < canvas.height / 2) {          // QUADRANT 1
            this.x--;
            this.y--;
        } else if (this.x > canvas.width / 2 && this.y < canvas.height / 2) {   // QUADRANT 2      
            this.x++;
            this.y--; 
        } else if (this.x < canvas.width / 2 && this.y > canvas.height / 2) {   // QUADRANT 3   
            this.x--;
            this.y++;
        } else if (this.x > canvas.width / 2 && this.y > canvas.height / 2) {   // QUADRANT 4
            this.x++;
            this.y++;
        }
        
        this.draw();
    }
} 