/* By producing variables here, we can collect 
elements from HTML to JavaScript. */
var num1input = document.getElementById("num1input");
var operatorinput = document.getElementById("operatorinput");
var num2input = document.getElementById("num2input");
var solvebutton = document.getElementById("solvebutton");

// This function below makes the "Solve" button clickable. //
solvebutton.addEventListener("click", function(){
var selected = operatorinput.value;

/* With these sets of coding, the user would enter a number,
or "input values", for both boxes and have to "select" an 
operator to either...*/

// Add...//
if (selected === "+"){
    var answer = parseInt(num1input.value) + parseInt(num2input.value);
    document.getElementById("ansblock").innerHTML = answer;
}
  
// Subtract...//    
else if (selected === "-"){
    var answer = parseInt(num1input.value) - parseInt(num2input.value);
    document.getElementById("ansblock").innerHTML = answer;
}

// Multiply...//
else if (selected === "*"){
    var answer = parseInt(num1input.value) * parseInt(num2input.value);
    document.getElementById("ansblock").innerHTML = answer;
}

// Divide...//
else if (selected === "/"){
    var answer = parseInt(num1input.value) / parseInt(num2input.value);
    document.getElementById("ansblock").innerHTML = answer;
}

// or Power the two input values togeter to create an answer. //
else if (selected === "x^y"){
    var answer = Math.pow(parseInt(num1input.value), parseInt(num2input.value));
    document.getElementById("ansblock").innerHTML = answer;
}

else if (selected === "sqrt"){
    var answer = Math.pow(parseInt(num2input.value), 1/ parseInt(num1input.value));
    document.getElementById("ansblock").innerHTML = answer;
}

})