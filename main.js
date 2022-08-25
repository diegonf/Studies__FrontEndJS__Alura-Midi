function tocaSom (tagSom) {
  const elemento = document.querySelector(tagSom);

  if (elemento != null && elemento.localName==='audio') {
    elemento.play();
  }
  else {
    console.log('Elemento não existe ou não é do tipo audio');
  }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for(let contador = 0; contador < listaDeTeclas.length; contador++){

  const tecla = listaDeTeclas[contador];
  const instrumento = tecla.classList[1];
  const idAudio = `#som_${instrumento}`;

  tecla.onclick = function (){
    tocaSom(idAudio);
  }

  tecla.onkeydown = function (evento) {
    
    if(evento.code === "Space" || evento.code === "NumpadEnter" || evento.code === "Enter"){
      tecla.classList.add('ativa');
    }
    
  }
  
  tecla.onkeyup = function () {
    tecla.classList.remove('ativa');
  }
  
}
