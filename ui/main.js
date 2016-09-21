console.log('Loaded!');

//Change the text of main-text div

var element = document.getElementById('main-text');

element.innerHTML = 'new value';

//Move the image 

var log = document.getElementById('img');
log.onclick = function () {
    log.style.marginLeft="100px";
}
