function changeColor()  {
    let rgbResult = document.getElementById("h2");
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let bgColor = `rgb(${r}, ${g}, ${b})`;
        document.body.style.background = bgColor;
        rgbResult.innerHTML = bgColor
        rgbResult.style.position = "absolute";
        rgbResult.style.left = "50%";
        rgbResult.style.top = "50%";
        rgbResult.style.transform = "translate(-50%, -50%)";
        



}
changeColor()



