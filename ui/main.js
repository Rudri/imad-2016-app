console.log('Loaded!');

//Change the text of main-text div

var element = document.getElementById('main-text');

element.innerHTML = 'new value';

//Move the image 

var img = document.getElementById('madi');

img.onclick = function () {
    log.style.marginLeft="100px";
}
