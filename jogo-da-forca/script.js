var palavras = [ 'ELFOS','BRUXAS','ORC','MAGOS','GRIFOS','VAMPIROS','NINFAS','ZUMBIS','DRAGOES','VINHAS' ]

var tabuleiro = document.getElementById ('forca').getContext('2d')
var caixa = document.getElementById ('forca2').getContext('2d')
var letras =[];
var palavraCorreta = "";
var palavraCerta = palavras[Math.floor(Math.random()*6)]
var quantidadeErros = 0;
var campo = document.querySelector('input')
var but = document.getElementById('button')
var acentos = 0;
var erros = 9;
var image = document.getElementById('source');
var cabeca = document.getElementById('cabeca');
var corpo = document.getElementById('corpo');
var bracoEscerdo = document.getElementById('Be');
var bracoDireito = document.getElementById('Bd');
var pernaEscerdo = document.getElementById('Pe');
var pernaDireito = document.getElementById('Pd');

//'HIPOGRIFO','SEREIAS','NINFAS','CICLOPES'

//escolher palavras aleatorias
function escolherPalavraSecreta()
{
	var palavra = palavras[Math.floor(Math.random()*palavras.length)]
	palavraSecreta = palavra
	console.log(palavra)
	return palavra
}
//desenhando traços no canvas
function escreverTraços()
{
	tabuleiro.lineWidth = 6
	tabuleiro.lineCap = "round"
	tabuleiro.lineJoin = "round"
	tabuleiro.strokeStyle ="#0a3871"
	tabuleiro.beginPath()
	var eixo = 600/palavraSecreta.length
	for(let i = 0; i < palavraSecreta.length; i++)
	{
		tabuleiro.moveTo(20+(eixo*i),95)
		tabuleiro.lineTo(70+(eixo*i),95)
	}
	tabuleiro.stroke()
	tabuleiro.closePath()
}
escreverTraços(escolherPalavraSecreta())

//Imagem Forca
image.addEventListener('load', e => {
	caixa.drawImage(image, 350,12,120,200);
  });


// Desenhando o Boneco

function desenharBoneco(quantidadeErros){
	switch(quantidadeErros){
		case 1:
			desenhaCabeca2();
			break;
		case 2:
			desenhaCorpo1();
			break;
	    case 3:
			desenhaBraçoEsquerdo();
			break;
	   case 4:
			desenhaBraçoDireito();
			break;
		case 5:
			desenhaPernaEsquerdo();
				break;
		case 6:
			desenhaPernaDireito();
			break;
	}
	

}
// Partes do Boneco
function desenhaCabeca2()
{

	caixa.drawImage(cabeca, 410,82,71,77);
		  
}

function desenhaCorpo1()
{

	caixa.drawImage(corpo, 425,147,36,62);
		  
}

function desenhaBraçoEsquerdo()
{

	caixa.drawImage(Bd, 401,146,40,57);
		  
}

function desenhaBraçoDireito()
{

	caixa.drawImage(Be, 449,146,40,57);
		  
}

function desenhaPernaEsquerdo()
{

	caixa.drawImage(Pd, 403,193,40,57);
		  
}

function desenhaPernaDireito()
{

	caixa.drawImage(Pe, 446,193,40,57);
		  
}

//--------------------------------------------


//Escreva a palavra Correta

function escreverLetraCerta(index){
	tabuleiro.font='bold 52px Inter' ;
	tabuleiro.lineWidth = 6
	tabuleiro.lineJoin = "round"
	tabuleiro.strokeStyle ="#85621a"
	tabuleiro.strokeStyle = "#85621a"

	var eixo = 600/palavraSecreta.length
	tabuleiro.fillText(palavraSecreta[index],25+(eixo*index),89)
	tabuleiro.stroke()
}
//Escreva a palavra Incorreta

function escreverLetraerrada(letra,errorsLeft){
	tabuleiro.font='bold 40px Inter' ;
	tabuleiro.lineWidth = 6
	tabuleiro.lineCap = "round"
	tabuleiro.lineJoin = "round"
	tabuleiro.strokeStyle = "0a3871"
	tabuleiro.fillText(letra,89+(40*(10-errorsLeft)),170,40)

}

//Verificando as Letras

function verificarLetraCerta(Key){
	if(letras.length < 1 || letras.indexOf(Key) < 0){
		console.log(Key)
	    letras.push(Key)
	    return false		
	}
	else {
		letras.push(Key.toUpperCase())
		return true
		
	}
	
}




function adicionarLetraCorreta (i){
	palavraCorreta += palavraSecreta[i].toUpperCase()
		if(palavraCorreta.length == palavraSecreta.length) {
			ganhou();
		}
	
}



function adicionarLetraIncorreta(letter){
	if(palavraSecreta.indexOf(letter) <= 0){
		erros -= 1
		if(quantidadeErros >= 5){
			gameover();
			return;
			
		}
	}
}

function playAgain() {
    location.reload();
    gameOver.style.display = "none";
    ganhou.style.display = "none";
}


document.onkeydown = (e) =>{
	var letra = e.key.toUpperCase()
	if(!verificarLetraCerta(e.key))
	{
		if(palavraSecreta.includes(letra))
		{
			adicionarLetraCorreta(palavraSecreta.indexOf(letra))
			for(let i =0; i <palavraSecreta.length; i++)
			{
				if(palavraSecreta[i] === letra)
				{
					escreverLetraCerta(i)
				}
			}
		}
	} 
	else 
	{
		if(!verificarLetraCerta(e.key)) 
        return
		adicionarLetraIncorreta(letra)
		escreverLetraerrada(letra,erros)
		quantidadeErros ++;
		desenharBoneco(quantidadeErros);
		




	}


	


}

function gameover() {
    gameOver.style.display = "flex";
}

function ganhou() {
    janela_ganhou.style.display = "flex";
}




function salvarPalavra() {


	var botao = document.querySelector(".salvar");
	var inputPalavra = document.querySelector(".input20");
	var palavraAdicionada = inputPalavra.value.toUpperCase();

	if(palavraAdicionada.length>=5 && palavraAdicionada.length<=8 ) {
		if(palavras.includes(palavraAdicionada)) {
			inputPalavra.value="";
			alert("Esta palavra já existe na lista, digite outra!");
		}
		else {
			palavras.push(palavraAdicionada);
			inputPalavra.value="";
			alert("A nova palavra foi salva!");
		} 
	} else {
		alert("A palavra deve ter entre 5 e 8 letras");
		inputPalavra.value = "";
	}
}










  