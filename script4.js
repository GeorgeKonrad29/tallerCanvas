const canvas = document.getElementById('myCanvas'); // Usar el canvas del HTML
const ctx = canvas.getContext('2d');

// Línea con estilo
ctx.beginPath();
ctx.moveTo(50, 300);
ctx.lineTo(250, 300);
ctx.strokeStyle = 'orange';
ctx.lineWidth = 5;
ctx.setLineDash([10, 5]); // Línea discontinua
ctx.stroke();
ctx.setLineDash([]); // Restablecer a línea continua

// Círculo relleno
ctx.beginPath();
ctx.arc(400, 300, 50, 0, Math.PI * 2); // (x, y, radius, startAngle, endAngle)
ctx.fillStyle = 'cyan';
ctx.fill();
ctx.strokeStyle = 'black';
ctx.lineWidth = 2;
ctx.stroke();

// Texto
ctx.font = '20px Arial';
ctx.fillStyle = 'purple';
ctx.fillText('Texto en Canvas', 500, 300); // (text, x, y)
ctx.strokeStyle = 'black';
ctx.strokeText('Texto en Canvas', 500, 300); // Contorno del texto

// Gradiente lineal
const gradient = ctx.createLinearGradient(50, 350, 250, 400);
gradient.addColorStop(0, 'red');
gradient.addColorStop(1, 'yellow');
ctx.fillStyle = gradient;
ctx.fillRect(50, 350, 200, 50); // (x, y, width, height)

// Gradiente radial
const radialGradient = ctx.createRadialGradient(400, 400, 10, 400, 400, 50);
radialGradient.addColorStop(0, 'blue');
radialGradient.addColorStop(1, 'white');
ctx.fillStyle = radialGradient;
ctx.beginPath();
ctx.arc(400, 400, 50, 0, Math.PI * 2);
ctx.fill();

// Imagen
const img = new Image();
img.src = 'https://via.placeholder.com/100'; // URL de una imagen
img.onload = () => {
    ctx.drawImage(img, 500, 350, 100, 100); // (image, x, y, width, height)
};