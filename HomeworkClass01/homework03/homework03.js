let inputColor = document.getElementById("color");
let inputFontSize = document.getElementById("fontSize");
let inputItems = document.getElementById("item");
let button = document.getElementById("btn");
let div = document.getElementById("div")

button.onclick = function(){
    let color = inputColor.value;
    let fontSize = inputFontSize.value;
    let items = inputItems.value.split(",");

    let unorderdList = document.createElement("ul");
        div.appendChild(unorderdList);
        unorderdList.style.color = color;
        unorderdList.style.fontSize = fontSize;
        unorderdList.innerText = " My unordered List ";

        for (let i = 0; i < items.length; i++) {
            let list = document.createElement("li");
            unorderdList.appendChild(list)
            list.innerText = items[i];
        }
    
    
}