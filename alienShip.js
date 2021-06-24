class AlienShip {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    draw() {
        // GLASS
        context.fillStyle = 'lightblue';
        context.strokeStyle = 'white';
        context.beginPath();
        context.arc(this.x, this.y, 50, 0, 8);
        context.stroke();
        context.fill();
        context.closePath();

        // WHITE REFLECTION
        context.fillStyle = 'white';
        context.strokeStyle = 'black';
        context.beginPath();
        context.ellipse(this.x + 15, this.y - 35, 10, 8, Math.PI * 0.1, 0, 8);
        context.stroke();
        context.fill();
        context.closePath();

        // LEG 1
        context.fillStyle = 'rgb(26, 23, 23)';
        context.strokeStyle = 'white';
        context.beginPath();
        context.ellipse(this.x, this.y + 50, 10, 20, Math.PI, 0, 8);
        context.stroke();
        context.fill();
        context.closePath();

        // LEG 1
        context.fillStyle = 'rgb(26, 23, 23)';
        context.strokeStyle = 'white';
        context.beginPath();
        context.ellipse(this.x, this.y + 50, 10, 20, Math.PI, 0, 8);
        context.stroke();
        context.fill();
        context.closePath();

        // LEG 2
        context.fillStyle = 'rgb(26, 23, 23)';
        context.strokeStyle = 'white';
        context.beginPath();
        context.ellipse(this.x - 40, this.y + 40, 10, 20, Math.PI, 0, 8);
        context.stroke();
        context.fill();
        context.closePath();

        // LEG 3
        context.fillStyle = 'rgb(26, 23, 23)';
        context.strokeStyle = 'white';
        context.beginPath();
        context.ellipse(this.x + 40, this.y + 40, 10, 20, Math.PI, 0, 8);
        context.stroke();
        context.fill();
        context.closePath();

        // CHASIS
        context.fillStyle = 'purple';
        context.strokeStyle = 'white';
        context.beginPath();
        context.ellipse(this.x, this.y + 22, 70, 30, Math.PI, 0, 8);
        context.stroke();
        context.fill();
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