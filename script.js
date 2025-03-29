const canvas = document.getElementById('myCanvas'); // Usar el canvas del HTML
const ctx = canvas.getContext('2d');

// Draw red circle outline
ctx.globalAlpha = 1.0;
ctx.strokeStyle = 'green';
ctx.lineWidth = 1;
ctx.beginPath();
ctx.arc(200, 200, 200, 0, Math.PI * 2); // Centro ajustado para intersección
ctx.stroke();

// Draw blue circle outline
ctx.strokeStyle = 'blue';
ctx.beginPath();
ctx.arc(400, 200, 200, 0, Math.PI * 2); // Centro ajustado para intersección
ctx.stroke();

// Draw yellow circle outline
ctx.strokeStyle = 'darkred';
ctx.beginPath();
ctx.arc(300, 400, 200, 0, Math.PI * 2); // Centro ajustado para intersección
ctx.stroke();