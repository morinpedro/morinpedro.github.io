
for(let i = 0; i< 45; i++) {
  document.getElementById('botonMostrarResumen'+i).addEventListener('click', function() {
    mostrarResumen(i);
  })
  document.getElementById('botonOcultarResumen'+i).addEventListener('click', function() {
    ocultarResumen(i);
  })
}

function mostrarResumen(numero) {
  document.getElementById('resumen'+numero).style.display="block";
  document.getElementById('botonMostrarResumen'+numero).style.display="none";
  document.getElementById('botonOcultarResumen'+numero).style.display="inline";
}

function ocultarResumen(numero) {
  document.getElementById('resumen'+numero).style.display="none";
  document.getElementById('botonMostrarResumen'+numero).style.display="inline";
  document.getElementById('botonOcultarResumen'+numero).style.display="none";
}

