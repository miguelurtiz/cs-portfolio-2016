/*This is used to get the mouse coordinates 
to get the position of the mouse when
upon the canvas.*/
function getMousePos(canvas, evt) {
var rect = canvas.getBoundingClientRect();
return {
  x: evt.clientX - rect.left,
  y: evt.clientY - rect.top
};
}

/* This is used to make the canvas 
that I created into a 2D perspective.*/
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

/*This is used to make the mouse locked 
on a highlighted pixel space on the canvas.*/
canvas.addEventListener('mousemove', function(evt) {
var mousePos = getMousePos(canvas, evt);
var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
var mousePos = getMousePos(canvas, evt)
}, false);

/*This is used where if you click your mouse
on a particular pixel, then the pixel will fill 
up with black.*/
canvas.addEventListener('mousedown', function(evt){

    context.fillStyle = "black";

    var mousePos = getMousePos(canvas, evt)
    var x = (mousePos.x - (mousePos.x % 20))
    var y = (mousePos.y - (mousePos.y % 20))
    context.fillRect(x, y, 20, 20);
}, false)

//Draw vertical grid
for(var c = 0; c <= 1000; c+= 20){
    context.fillStyle = "grey";
    context.fillRect(c,0,1,1000)
}
//Draw horizantal grid
for(var r = 0; r <= 1000; r+= 20){
    context.fillStyle = "grey";
    context.fillRect(0,r,1000,1)
}