let list = document.getElementById("ul");
let button = document.getElementById("btn");
let array = ["Stefan", "Hristina", "Simona", "Kristijan", "Nikola"];

button.onclick = function(){
    for (let i = 0; i < array.length; i++){
        list.innerHTML += `<li> ${array[i]} </li>`;
    }

}


