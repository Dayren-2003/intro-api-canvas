/*******************************************************
 * PROGRAMA: Dibujo de un rectángulo en Canvas HTML5
 * DESCRIPCIÓN:
 * Este programa utiliza el elemento <canvas> de HTML5
 * para dibujar un rectángulo de color azul-violeta dentro de
 * una página web. El tamaño del canvas se ajusta
 * dinámicamente al 50% del ancho y 50% del alto de la pantalla.
 *******************************************************/

/* Se obtiene el elemento canvas del documento HTML */
var canvas = document.getElementById("lienzo");

/* Se establece el tamaño del canvas al 50% de la ventana */
canvas.width  = window.innerWidth/2;   // 50% del ancho de la pantalla
canvas.height = window.innerHeight/2;  // 50% del alto de la pantalla

/* Se obtiene el contexto de dibujo en 2D */
var ctx = canvas.getContext("2d");

/* Se establece el color de relleno */
ctx.fillStyle = "rgb(80, 26, 189)";

/* Se dibuja un rectángulo que ocupa todo el canvas */
ctx.fillRect(10,10,200,200);
