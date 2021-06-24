class BlackHole {
    constructor(x, y, radiusX, radiusY, rotationNumber) {
        this.x = x;
        this.y = y;
        this.radiusX = radiusX;
        this.radiusY = radiusY;
        this.rotationNumber = rotationNumber;
    }

    draw() {
        // OUTTEST ELLIPSE
        context.beginPath();
        context.globalAlpha = 0.05;
        context.fillStyle = "orange";
        context.ellipse(this.x, this.y, this.radiusX, this.radiusY, Math.PI * this.rotationNumber, 0, Math.PI * 2);
        context.fill();

        // OUTER ELLIPSE
        context.beginPath();
        context.globalAlpha = 0.3;
        context.fillStyle = "yellow";
        context.ellipse(this.x, this.y, this.radiusX - 40, this.radiusY, Math.PI * this.rotationNumber, 0, Math.PI * 2);
        context.fill();

        // INSIDE ELLIPSE
        context.beginPath();
        context.globalAlpha = 0.2;
        context.fillStyle = "red";
        context.ellipse(this.x, this.y, this.radiusX - 100, this.radiusY - 80, Math.PI * this.rotationNumber, 0, Math.PI * 2);
        context.fill();

        // INNEST ELLIPSE
        context.beginPath();
        context.globalAlpha = 1;
        context.fillStyle = "darkred";
        context.ellipse(this.x, this.y, this.radiusX - 50, this.radiusY - 80, Math.PI * this.rotationNumber, 0, Math.PI * 2);
        context.fill();

        // NEUTRON HOLE - ELLIPSE
        context.beginPath();
        context.fillStyle = "black";
        context.ellipse(this.x, this.y, this.radiusX - 160, this.radiusY - 150, Math.PI * this.rotationNumber, 0, Math.PI * 2);
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