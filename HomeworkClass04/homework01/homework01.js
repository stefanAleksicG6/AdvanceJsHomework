let h1 = document.getElementById("h1");
let textSizeInput = document.getElementById("textSize");
let colorInput = document.getElementById("color");
let button = document.getElementById("btn");

  
let changeColor = (element, color) => {
    if(!color){
        color = "black";
    }
    element.style.color = color;

  }
  
let changeSize = (element, textSize ) => {
    if(!textSize){
        textSize = 24;
    }
    element.style.fontSize = textSize + "px";

  }
  
    button.addEventListener("click", () => {
        changeColor(h1, colorInput.value);
        changeSize(h1, textSizeInput.value);
        

  })