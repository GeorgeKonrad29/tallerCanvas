const canvas = document.getElementById('myCanvas'); // Usar el canvas del HTML
const ctx = canvas.getContext('2d');

// Triángulo
ctx.beginPath();
ctx.moveTo(100, 100); // Punto superior
ctx.lineTo(50, 200);  // Punto inferior izquierdo
ctx.lineTo(150, 200); // Punto inferior derecho
ctx.closePath();
ctx.strokeStyle = 'blue';
ctx.lineWidth = 2;
ctx.stroke();

// Rectángulo
ctx.beginPath();
ctx.rect(200, 100, 100, 50); // (x, y, width, height)
ctx.strokeStyle = 'green';
ctx.lineWidth = 2;
ctx.stroke();

// Trapecio
ctx.beginPath();
ctx.moveTo(350, 100); // Punto superior izquierdo
ctx.lineTo(300, 200); // Punto inferior izquierdo
ctx.lineTo(400, 200); // Punto inferior derecho
ctx.lineTo(450, 100); // Punto superior derecho
ctx.closePath();
ctx.strokeStyle = 'red';
ctx.lineWidth = 2;
ctx.stroke();

// Hexágono
ctx.beginPath();
const hexagonCenterX = 600;
const hexagonCenterY = 150;
const hexagonRadius = 50;
for (let i = 0; i < 6; i++) {
    const angle = (Math.PI / 3) * i; // Dividir el círculo en 6 partes
    const x = hexagonCenterX + hexagonRadius * Math.cos(angle);
    const y = hexagonCenterY + hexagonRadius * Math.sin(angle);
    if (i === 0) {
        ctx.moveTo(x, y);
    } else {
        ctx.lineTo(x, y);
    }
}
ctx.closePath();
ctx.strokeStyle = 'purple';
ctx.lineWidth = 2;
ctx.stroke();