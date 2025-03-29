const canvas = document.getElementById('myCanvas'); // Usar el canvas del HTML
const ctx = canvas.getContext('2d');

// Draw a red line at the bottom of the canvas
ctx.strokeStyle = 'red';
ctx.lineWidth = 1;
ctx.beginPath();
ctx.moveTo(10, canvas.height - 10); // Inicio de la línea (izquierda abajo)
ctx.lineTo(canvas.width-10, canvas.height - 10); // Fin de la línea (derecha abajo)
ctx.stroke();

ctx.strokeStyle = 'black';
ctx.lineWidth = 1;
ctx.beginPath();
ctx.moveTo(400, canvas.height - 10); // Inicio de la línea (izquierda abajo)
ctx.lineTo(10, 500); // Fin de la línea (derecha abajo)
ctx.stroke();

ctx.strokeStyle = 'black';
ctx.lineWidth = 1;
ctx.beginPath();
ctx.moveTo(400, canvas.height - 10); // Inicio de la línea (izquierda abajo)
ctx.lineTo(canvas.width-10, 500); // Fin de la línea (derecha abajo)
ctx.stroke();

ctx.strokeStyle = 'black';
ctx.lineWidth = 1;
ctx.beginPath();
ctx.moveTo(400, canvas.height - 10); // Inicio de la línea (izquierda abajo)
ctx.lineTo(400, 350); // Fin de la línea (derecha abajo)
ctx.stroke();

ctx.strokeStyle = 'black';
ctx.lineWidth = 1;
ctx.beginPath();
ctx.moveTo(canvas.width-10, 500); // Inicio de la línea (izquierda abajo)
ctx.lineTo(canvas.width-10, 250); // Fin de la línea (derecha abajo)
ctx.stroke();

ctx.strokeStyle = 'black';
ctx.lineWidth = 1;
ctx.beginPath();
ctx.moveTo(10, 500); // Inicio de la línea (izquierda abajo)
ctx.lineTo(10, 250); // Fin de la línea (derecha abajo)
ctx.stroke();

ctx.strokeStyle = 'black';
ctx.lineWidth = 1;
ctx.beginPath();
ctx.moveTo(10, 250); // Inicio de la línea (izquierda abajo)
ctx.lineTo(400, 350); // Fin de la línea (derecha abajo)
ctx.stroke();

ctx.strokeStyle = 'black';
ctx.lineWidth = 1;
ctx.beginPath();
ctx.moveTo(canvas.width-10, 250); // Inicio de la línea (izquierda abajo)
ctx.lineTo(400, 350); // Fin de la línea (derecha abajo)
ctx.stroke();

ctx.strokeStyle = 'black';
ctx.lineWidth = 1;
ctx.beginPath();
ctx.moveTo(canvas.width-10, 250); // Inicio de la línea (izquierda abajo)
ctx.lineTo(400, 150); // Fin de la línea (derecha abajo)
ctx.stroke();

ctx.strokeStyle = 'black';
ctx.lineWidth = 1;
ctx.beginPath();
ctx.moveTo(10, 250); // Inicio de la línea (izquierda abajo)
ctx.lineTo(400, 150); // Fin de la línea (derecha abajo)
ctx.stroke();

ctx.strokeStyle = 'black';
ctx.lineWidth = 1;
ctx.beginPath();
ctx.moveTo(95, 250); // Inicio de la línea (izquierda abajo)
ctx.lineTo(400, 175); // Fin de la línea (derecha abajo)
ctx.stroke();

ctx.strokeStyle = 'black';
ctx.lineWidth = 1;
ctx.beginPath();
ctx.moveTo(95, 250); // Inicio de la línea (izquierda abajo)
ctx.lineTo(400, 325); // Fin de la línea (derecha abajo)
ctx.stroke();

ctx.strokeStyle = 'black';
ctx.lineWidth = 1;
ctx.beginPath();
ctx.moveTo(canvas.width-95, 250); // Inicio de la línea (izquierda abajo)
ctx.lineTo(400, 325); // Fin de la línea (derecha abajo)
ctx.stroke();

ctx.strokeStyle = 'black';
ctx.lineWidth = 1;
ctx.beginPath();
ctx.moveTo(canvas.width-95, 250); // Inicio de la línea (izquierda abajo)
ctx.lineTo(400, 175); // Fin de la línea (derecha abajo)
ctx.stroke();

ctx.strokeStyle = 'black';
ctx.lineWidth = 1;
ctx.beginPath();
ctx.moveTo(400, 325); // Inicio de la línea (izquierda abajo)
ctx.lineTo(400, 175); // Fin de la línea (derecha abajo)
ctx.stroke();