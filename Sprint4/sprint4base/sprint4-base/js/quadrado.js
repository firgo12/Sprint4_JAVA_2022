// MONTA OS QUADRADOS(ROBÔS E OBSTÁCULOS)
//Metodo construtor - Possui como base a orientação do objeto!!
// Istanciar um objeto - seria as etapas necessárias para se fazer um objeto. 
//Imagine que é uma receita de bolo, ou seja, criamos uma classe para instanciar o objeto
//Dessa forma, a classe criada CRIA o objeto (no exemplo, o bolo)!!


const quadrado = function (posX, posY, width, height, color, velocidade) { //Foi criado uma constante, e criou uma função que precisa dos atributos para se construir um objeto! Nesse caso o quadrado.
    this.posX = posX;
    this.posY = posY;
    this.width = width;
    this.height = height;
    this.color = color;
    this.velocidade = velocidade;
}