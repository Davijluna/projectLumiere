const off = document.getElementById('off');
const On = document.getElementById('On');
const lamp = document.getElementById('texto');
const checkout = document.getElementById('checkout');

function flashCheckout() {
    if(brokenTrue) {
        lamp.src = './img/desligada.jpg';
    }
}

function brokenTrue() {
    return lamp.src.indexOf ('quebrada') > -1
}

function mouseFelse() {
    if(!brokenTrue()) {
        lamp.src ='./img/desligada.jpg';
    }
}

function ligada() {
    if(!brokenTrue()) {
        lamp.src ='./img/ligada.jpg';
    }
}

function desligada() {
    if(!brokenTrue()) {
    lamp.src ='./img/desligada.jpg';
}
}

function mouseTrue() {
    if(!brokenTrue()) {
        lamp.src ='./img/ligada.jpg';
    }
}


function lampBroken() {
    lamp.src ='./img/quebrada.jpg';
}

checkout.addEventListener('click', flashCheckout)
lamp.addEventListener('dblclick', lampBroken)
lamp.addEventListener('mouseleave', mouseFelse)
lamp.addEventListener('mouseover', mouseTrue)
On.addEventListener('click', desligada)
off.addEventListener('click', ligada);
