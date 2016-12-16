// JavaScript File
/* These "var" properties are used to collect 
elements by their ID name in the HTML file. */
var input = document.getElementById("input");
var enter = document.getElementById("enter");
var output = document.getElementById("output");
var colorinput = document.getElementById("colorinput");

/* This section of coding is used to 
make the Enter button clickable and functional. */
enter.addEventListener("click", function(){
  var listItem = document.createElement("option");
  var color = colorinput.value;
  listItem.style.color = color
  
/* This piece of coding tells the HTML to produce the 
text that the user typed below the "delete all" button. */
  listItem.appendChild(document.createTextNode(input.value));
  output.appendChild(listItem);
  
})

/* This last piece of coding is used to make 
the "Delete all" button clickable and functional.*/
// Once the button is pressed, the page refreshes
output.addEventListener("click", function(evt) {
  var remove = evt.target
  remove.parentNode.removeChild(remove);
}) 