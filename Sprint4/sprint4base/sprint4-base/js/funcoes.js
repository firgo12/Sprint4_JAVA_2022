(function () { //As variaveis dentro dessa função SOMENTE EXISTE nessa função. Estamos encapsulando essa função, ou seja, estamos protegende esse algo!
  const cnv = document.querySelector('#canvas');
  const ctx = cnv.getContext('2d'); //Além de pegar o ID, precisamos flar qual o contexto que vamos usar. Nesse caso o contexto é 2D!

  //movimentos
  let moveLeft = false;
  let moveUp = false;
  let moveRight = false;
  let moveDown = false;

  // arrays de objetos!
  const quadrados = [];

  // quadrados
  const quadrado1 = new quadrado(20, 10, 50, 70, "#f60", 5); //Segue a regrinha da função
  quadrados.push(quadrado1); //Coloca no final do array

  const quadrado2 = new quadrado(100, 120, 550, 50, "#000", 0);
  quadrados.push(quadrado2);

  const quadrado3 = new quadrado(400, 350, 500, 50, "#000", 0);
  quadrados.push(quadrado3);

  // pressionar as teclas
  window.addEventListener('keydown', function (e) { //Dentro DAQUELA janela, irá escutar o evento 'keydown' e chamamos uma função com o parâmetro do evento (que criamos)
    const nomeKey = e.key; //.key é o nome da tecla precionada! E 'e' é o evento.
    console.log(nomeKey);//Ver o nome da tecla precionada.
    switch (nomeKey) {
      case 'ArrowLeft':
        moveLeft = true;
        break;
      case 'ArrowUp':
        moveUp = true;
        break;
      case 'ArrowRight':
        moveRight = true;
        break;
      case 'ArrowDown':
        moveDown = true;
        break;
    }
  });

  //soltar as teclas  
  window.addEventListener('keyup', (e) => { //Para voltar no estado inicial! False (tipo booleano)
    const key = e.key;
    switch (key) {
      case 'ArrowLeft':
        moveLeft = false;
        break;
      case 'ArrowUp':
        moveUp = false;
        break;
      case 'ArrowRight':
        moveRight = false;
        break;
      case 'ArrowDown':
        moveDown = false;
        break;
    }
  });

  function moverQuadrados() {
    if (moveLeft && !moveRight) {
      quadrado1.posX -= quadrado1.velocidade; //Posição inicial do quadrado1 menos a velocidade do quadrado1. Dessa forma o canvas re-desenha o quadrado na nova posição
    }
    if (moveRight && !moveLeft) {
      quadrado1.posX += quadrado1.velocidade;
    }
    if (moveUp && !moveDown) {
      quadrado1.posY -= quadrado1.velocidade;
    }
    if (moveDown && !moveUp) {
      quadrado1.posY += quadrado1.velocidade;
    }

    //fiixar na tela - NÃO SAI DO CANVAS - Precisa pensar em como fazer isso com o obstáculo
    quadrado1.posX = Math.max(0, Math.min(cnv.width - quadrado1.width, quadrado1.posX));//O método Math.max 'posição máxima' no 0. E a 'posição mínima' é o tamanha do canvas - MENOS o tamanho do quadrado (com posição), afinal o quadrado ocupa um espaço!!
    quadrado1.posY = Math.max(0, Math.min(cnv.height - quadrado1.height, quadrado1.posY));
  }


  function exibirQuadrados() {//Essa função desenha o quadrado!!!
    ctx.clearRect(0, 0, cnv.width, cnv.height); //clearRect, limpa o contexto! A posição do quadrado. Senão virá um 'paint' da vida
    for (const i in quadrados) {
      const spr = quadrados[i];
      ctx.fillStyle = spr.color //fillStyle preenche a cor do quadrado
      ctx.fillRect(spr.posX, spr.posY, spr.width, spr.height); //fillRect o desenho em si do quadrado, sua posx, posy e etc.
    }
  }
  //solicitar uma animação ao browser e chamar a função
  //que é a propria função atualizarTela
  function atualizarTela() {//Uma função que se auto invoca!
    window.requestAnimationFrame(atualizarTela, cnv);
    moverQuadrados();
    exibirQuadrados();
  }
  atualizarTela();

}());