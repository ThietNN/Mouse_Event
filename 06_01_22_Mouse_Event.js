let img

function init(){
    img = document.getElementById('ball')
    img.style.position = 'relative'
    img.style.left = '0px';
}
function right(){
    img.style.left = parseInt(img.style.left) + 10 + 'px';
}

window.onload = init;
