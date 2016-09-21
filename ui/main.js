console.log('Loaded!');

//Change the text of main-text div

var element = document.getElementById('main-text');

element.innerHTML = 'new value';

//Move the image 

var moveLeft = 0;
var img = document.getElementById('madi');
function moveRight() {
    var moveLeft = moveLeft + 10;
    img.style.marginleft = marginLeft + 'px';
}
img.onclick = function () {
    var interval=setInterval(moveRight,100);
};

