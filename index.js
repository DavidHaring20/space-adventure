// BASE CODE
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

// VARIABLES
let stars = [];
let blackholes = [];
let asteroids = [];
let alienships = [];
let width = window.innerWidth;
let height = window.innerHeight;
const fps = 1000/5;

// EVENT LISTENERS 
window.addEventListener("load", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// FUNCTIONS FOR RENDERING
function clean() {
    context.fillStyle = 'black';
    context.fillRect(0, 0, canvas.width, canvas.height);
}

setInterval(() => {
    let randomX = Math.random() * width;
    let randomY = Math.random() * height;
    let randomWidth = Math.random() * 8;
    let randomHeight = Math.random() * 8; 
    let randomOpacity = Math.random();

    stars.push(new Star(randomX, randomY, randomWidth, randomHeight, randomOpacity));
}, 2000);

setInterval(() => {
    let blackholeX = Math.random() * width;
    let blackholeY = Math.random() * height;
    let blackholeRadiusX = Math.random() * width / 4 + 160;
    let blackholeRadiusY = Math.random() * height / 5 + 150;
    let blacholeRotationNumber = Math.random() / 2;
    
    blackholes.push(new BlackHole(blackholeX, blackholeY, blackholeRadiusX, blackholeRadiusY, blacholeRotationNumber));
}, 60000);

setInterval(() => {
    let asteroidX = Math.random() * width;
    let asteroidY = Math.random() * height;
    let asteroidRotatioNumber = Math.random();

    asteroids.push(new Asteroid(asteroidX, asteroidY, asteroidRotatioNumber));
}, 20000);

setInterval(() => {
    let alienShipX = Math.random() * width;
    let alienShipY = Math.random() * height;

    alienships.push(new AlienShip(alienShipX, alienShipY));
}, 40000);

// FUNCTION FOR RENDERING
function draw() {
    setTimeout(() => {
        requestAnimationFrame(draw);
    }, fps);

    // METHOD FOR CLEANING SCREEN
    clean();

    // METHOD FOR RENDERING
    for (let i = 0; i < stars.length; i++) {
        stars[i].move();
    }
    for (let i = 0; i < blackholes.length; i++) {
        blackholes[i].move();
    }
    for (let i = 0; i < asteroids.length; i++) {
        asteroids[i].move();
    }
    for (let i = 0; i < alienships.length; i++) {
        alienships[i].move();
    }
}
draw();