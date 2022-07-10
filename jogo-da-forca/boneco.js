
var tabuleiro = document.getElementById ('forca')
var pincel = tela.getContext("2d");



function desenharRosto(x,y,raio)
{
	pincel.beginPath();
		  pincel.arc(75, 75, 50, 0, Math.PI * 2, true); // Círculo exterior
		  pincel.moveTo(80, 75);
		  pincel.arc(75, 75, 35, 0, Math.PI, false);  // Boca (sentido horário)
		  pincel.moveTo(25, 65);
		  pincel.arc(60, 65, 5, 0, Math.PI * 2, true);  // Olho esquerdo
		  pincel.moveTo(95, 65);
		  pincel.arc(90, 65, 5, 0, Math.PI * 2, true);  // Olho direito
		  pincel.stroke();


}

 pincel.fillStyle = "darkgreen";
 pincel.fillRect(0, 0, 350, 300);

 /* olho 01 */
 pincel.fillStyle = "black";
 pincel.fillRect(50, 50, 90, 90);

 /* olho 02 */
 pincel.fillRect(210, 50, 90, 90);

 /* nariz */
 pincel.fillRect(140, 140, 70, 100);

 /* boca esquerda */
 pincel.fillRect(100, 190, 40, 110);

 /* boca direita */
 pincel.fillRect(210, 190, 40, 110);




function draw() {
		var canvas = document.getElementById('forca');
		if (canvas.getContext) {
		  var ctx = canvas.getContext('2d');
	  
		  ctx.beginPath();
		  ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Círculo exterior
		  ctx.moveTo(80, 75);
		  ctx.arc(75, 75, 35, 0, Math.PI, false);  // Boca (sentido horário)
		  ctx.moveTo(25, 65);
		  ctx.arc(60, 65, 5, 0, Math.PI * 2, true);  // Olho esquerdo
		  ctx.moveTo(95, 65);
		  ctx.arc(90, 65, 5, 0, Math.PI * 2, true);  // Olho direito
		  ctx.stroke();
		}
	  }