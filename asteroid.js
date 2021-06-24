class Asteroid {
    constructor(x, y, rotationNumber) {
        this.x = x; 
        this.y = y;
        this.rotationNumber = rotationNumber;
    }

    draw() {
        // ASTEROID BODY 1
        context.fillStyle = 'gray';
        context.beginPath();
        context.ellipse(this.x, this.y, 60, 40, Math.PI * this.rotationNumber, 0, 8);
        context.fill();

        // ASTEROID BODY 2
        
        context.fillStyle = 'gray';
        context.beginPath();
        context.ellipse(this.x - 20, this.y - 10, 50, 40, Math.PI * this.rotationNumber + 0.1, 0, 8);
        context.fill();

        // ASTEROID HOLE 1
        context.fillStyle = 'lightgray';
        context.strokeStyle = 'black';
        context.beginPath();
        context.arc(this.x + 5, this.y - 22, 15, 0, 8);
        context.stroke();
        context.fill();

        // ASTEROID HOLE 2
        context.fillStyle = 'lightgray';
        context.strokeStyle = 'black';
        context.beginPath();
        context.arc(this.x - 45, this.y + 10, 7, 0, 8);
        context.stroke();
        context.fill();

        // // ASTEROID HOLE 3
        context.fillStyle = 'lightgray';
        context.strokeStyle = 'black';
        context.beginPath();
        context.arc(this.x - 50, this.y, 5, 0, 8);
        context.stroke();
        context.fill();

        // // ASTEROID HOLE 4 
        context.fillStyle = 'lightgray';
        context.strokeStyle = 'black';
        context.beginPath();
        context.arc(this.x - 10, this.y + 15, 20, 0, 8);
        context.stroke();
        context.fill();
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