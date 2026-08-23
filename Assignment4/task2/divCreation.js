//Write your code here
function createDiv(width, height, text) {
    let newDiv=document.createElement('div');
    newDiv.style.width=width+'px';
    newDiv.style.height=height+'px';
    newDiv.textContent=text;
    var container=document.getElementById('container');
    container.appendChild(newDiv)
}


// Do not change this code
Window.createDiv = createDiv;