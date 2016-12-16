// JavaScript File
var input = document.getElementById("input");
var enter = document.getElementById("enter");
var output = document.getElementById("output");
var colorinput = document.getElementById("colorinput");

enter.addEventListener("click", function(){
  var listItem = document.createElement("option");
  var color = colorinput.value;
  listItem.style.color = color
  
  listItem.appendChild(document.createTextNode(input.value));
  output.appendChild(listItem);
  
})

output.addEventListener("click", function(evt) {
  var remove = evt.target
  remove.parentNode.removeChild(remove);
}) 