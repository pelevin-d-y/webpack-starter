import '../styles/index.scss';

var canvas = document.getElementById('c1');
var ctx = canvas.getContext('2d');
var myColor = 'red';
console.log('myColor', myColor)

document.getElementById('color').oninput = function(){
	myColor = this.value;
}


	
canvas.onmousedown = function(){
	canvas.onmousemove = function(event){
		var x = event.offsetX;
    var y = event.offsetY;
    console.log(y, x)
		ctx.fillStyle = myColor;
		ctx.fillRect(x-5, y-5, 10, 10);
		ctx.fill();
	}
	canvas.onmouseup = function(){
		canvas.onmousemove = null;
	}
}
