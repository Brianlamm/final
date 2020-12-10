document.querySelector("label").style.display = 'none';
document.querySelector("input").style.display = 'none';
document.querySelector("button").style.display = 'none';
var x = document.querySelector(".first");
for(let i of x){
    lis.appendChild(i);
    document.getElementById("#thumb-bar").appendChild(lis)
}
document.getElementsByClassName(".first").addEventListener("mouseover", display);

function display() {
    document.querySelector("label").style.display = 'visible';
    document.querySelector("input").style.display = 'visible';
    document.querySelector("button").style.display = 'visible';
}