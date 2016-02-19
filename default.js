

$(document).ready(function () {
	drawJ();
});

function drawJ() {
	var c = document.getElementById("myCanvasJ");
	var j = c.getContext("2d");
	var x = 20;
	var y = 70;

	j.strokeStyle = 'blue';
	j.lineWidth = 10;

	j.beginPath(); 
	j.moveTo(20+x,120+y);                  //punto inicial
	j.lineTo(20+x, 140+y);                  //linea vertical
	j.arcTo(20+x, 200+y, 70+x, 200+y, 50);
	j.lineTo(110+x, 200+y);              // Create a horizontal line
	j.arcTo(160+x, 200+y, 160+x, 20+y, 50);   //x1,y1,x2,y2,r
	j.lineTo(160+x,20+y);            //primera vertical
	j.lineTo(240+x,20+y);            //primera horizontal
	j.lineTo(240+x,-15+y);           //segunda vertical
	j.lineTo(20+x,-15+y);            //tercera horizontal (la de arriba grande)
	j.lineTo(20+x,20+y);             //vertival izquierda de arriba
	j.lineTo(100+x,20+y);            //horizontal 
	j.lineTo(100+x,120+y);            //vertical  
	j.arcTo(100+x, 150+y, 50+x, 150+y, 10); 
	j.arcTo(80+x, 150+y, 80+x, 60+y, 10); 
	j.lineTo(80+x,120+y);            //vertical  
	j.lineTo(15+x,120+y); 
	j.stroke(); 
}


