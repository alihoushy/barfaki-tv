function getRandomGrayColor() {
     // Generate a random value between 0 and 255 for each RGB component
     const red = Math.floor(Math.random() * 256);
     const green = red; // Make green component the same as red for grayscale
     const blue = red;

     // Create an RGB color string
     const rgbColor = `rgb(${red},${green},${blue})`;

     return rgbColor;
}

const canvas = document.getElementById('tv-screen');
const ctx = canvas.getContext('2d');
const width = canvas.width;
const height = canvas.height;

// Function to draw random static on the screen
function drawStatic() {
     ctx.clearRect(0, 0, width, height);
     for (let i = 0; i < 450; i+=2) {
          for (let j = 0; j < 340; j+=2) {
               ctx.fillStyle = getRandomGrayColor();
               ctx.fillRect(i, j, 2, 2);
          }
     }
}

// Main animation loop
function animate() {
     drawStatic();
     requestAnimationFrame(animate);
}

// Run
animate();
