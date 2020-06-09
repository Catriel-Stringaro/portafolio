var dibujo = document.getElementById('plano');
var lienzo = dibujo.getContext('2d');
var texto = document.getElementById('cajaDeTextoId');
var boton = document.getElementById('botonId');
boton.addEventListener("click", dibujarPorClick);
var ancho = dibujo.width;
var anchoCaja = dibujo.width/2;
var colorBorde = "black";
var color = "red";

dibujarLinea(colorBorde , 1,1,1,499);
dibujarLinea(colorBorde , 1,499,499,499);
dibujarLinea(colorBorde , 499,1,1,1);
dibujarLinea(colorBorde , 499,499,499,1);
dibujarLinea(colorBorde , 250,1,250,499);
dibujarLinea(colorBorde , 1,250,499,250);
//bordes fijos
function dibujarLinea (color, xi, yi, xf, yf)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xi,yi);
  lienzo.lineTo(xf,yf);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujarPorClick()
{
  var l = 0;
  var yi, xf;
  var yiN, xf2;
  var lineas = parseInt(texto.value);
  var espacio = anchoCaja / lineas;
  for (l=0; l < lineas; l++)
  {
    yi = espacio * l;
    xf = espacio * (l + 1);
    yiN = 500 - (espacio * l);
    xf1 = 250 + (espacio * (l + 1));
    xfN = 250 - (espacio * (l + 1));

    yiN2 = espacio * l;
    xfN2 = espacio * (l + 1);
    dibujarLinea (color, 250, yi, xf1,250);//superior Derecho
    dibujarLinea (color, 250, yiN, xf1, 250);//inferior Derecho
    dibujarLinea (color, 250, yiN, xfN, 250);//inferior izquierdo
    dibujarLinea (color, 250, yi, xfN, 250);//superior izquierdo
    console.log(yi,xf);
  }
console.log("datos del espacio " + ancho,anchoCaja, espacio);
}
