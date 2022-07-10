var palavras = [ 'INPUT', 'ABEND','CHATBOT','BACKUP','BIOS','BITCOIN'
,'BYTE']

var tabuleiro = document.getElementById ('forca').getContext('2d')
var letras =[];
var palavraCorreta = "";
var palavraCerta = palavras[Math.floor(Math.random()*6)]
var quantidadeErros = 0;
var tentativas ="";
var acentos = 0;
var erros = 9;




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
		tabuleiro.moveTo(80+(eixo*i),370)
		tabuleiro.lineTo(120+(eixo*i),370)


	}
	tabuleiro.stroke()
	tabuleiro.closePath()
}
function forca(){
	tabuleiro.beginPath();
	tabuleiro.moveTo(150,30);
	tabuleiro.lineTo(40,30);
	tabuleiro.lineTo(40,270);
	
	tabuleiro.stroke();
}
function forca2(){
	tabuleiro.beginPath();
	tabuleiro.moveTo(150,30);
	tabuleiro.lineTo(150,60);
	tabuleiro.stroke();

}
escreverTraços(escolherPalavraSecreta())
forca();
forca2();





// Desenhando o Boneco

function desenharBoneco(quantidadeErros){
	switch(quantidadeErros){
		case 1:
			desenhaCabeca();
			break;
		case 2:
			desenhaCorpo();
			break;
	    case 3:
			desenhaBracoE();
			break;
	   case 4:
			desenhaBracoD();
			break;
		case 5:
			desenhaPernaE();
				break;
		case 6:
			desenhaPernaD();
			break;
	}

}

function desenhaCabeca()
{
	tabuleiro.beginPath();
		  tabuleiro.arc(150, 80, 20, 0, Math.PI * 2, true); // Cabeça
		  tabuleiro.moveTo(80, 75);
		  tabuleiro.stroke();
}

function desenhaCorpo()
{
	tabuleiro.beginPath();
		  tabuleiro.moveTo(150, 99);//Corpo
		  tabuleiro.lineTo(150,189);
		  tabuleiro.stroke();
}

function desenhaBracoE()
{
	tabuleiro.beginPath(); 
		  tabuleiro.moveTo(150, 120);// Braço Esquerdo
		  tabuleiro.lineTo(110,99);
		  tabuleiro.stroke();
}

function desenhaBracoD()
{
	tabuleiro.beginPath();
	tabuleiro.moveTo(150, 120);// Braço Esquerdo
	tabuleiro.lineTo(186,99);
	tabuleiro.stroke();
}

function desenhaPernaE()
{
	tabuleiro.beginPath();
	tabuleiro.moveTo(151, 189);// Perna Esquerdo
	tabuleiro.lineTo(96,199);
	tabuleiro.stroke();
}

function desenhaPernaD()
{
	tabuleiro.beginPath();
	tabuleiro.moveTo(151, 189);// Perna Esquerdo
	tabuleiro.lineTo(186,199);
	tabuleiro.stroke();
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
	tabuleiro.fillText(palavraSecreta[index],84+(eixo*index),360)
	tabuleiro.stroke()
}
//Escreva a palavra Incorreta

function escreverLetraerrada(letra,errorsLeft){
	tabuleiro.font='bold 40px Inter' ;
	tabuleiro.lineWidth = 6
	tabuleiro.lineCap = "round"
	tabuleiro.lineJoin = "round"
	tabuleiro.strokeStyle = "0a3871"
	tabuleiro.fillText(letra,120+(40*(10-errorsLeft)),410,40)

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

}

function adicionarLetraIncorreta(letter){
	if(palavraSecreta.indexOf(letter)   <= 0){
		erros -= 1
	}
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
function vereficarFimJogo(){
	if(quantidadeErros >= 6){
		tabuleiro.font ="20px arial";
		tabuleiro.fillText("Game Over",200,300);
		window.onkeypress = null;
		return;
	}
	if(acertos == palavraCerta.length){
		tabuleiro.font ="20px arial";
		tabuleiro.fillText("Você Ganhou!!",200,300);
		window.onkeypress = null;
		return;
	}
	

}

vereficarFimJogo();





  