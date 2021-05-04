let btnPlus = document.querySelector('.plus');
let btnMinus = document.querySelector('.minus');
let btnColor = document.querySelector('.color');
let text = document.querySelector('.text')

let i = 20;
function allInOne () {
    btnPlus.addEventListener('click', function(){
        if (i<40){
            i = i + 2;
            text.style.fontSize = `${i}px`;
        }
    })
    btnMinus.addEventListener('click', function(){
        if (i>14){
            i = i - 2;
            text.style.fontSize = `${i}px`;
        }
    })
    btnColor.addEventListener('click', function() {
        let a = Math.floor(Math.random()* (255 - 0 + 1) + 0);
        let b = Math.floor(Math.random()* (255 - 0 + 1) + 0);
        let c = Math.floor(Math.random()* (255 - 0 + 1) + 0);
        text.style.color = `rgb(${a},${b},${c})`;
    })
}

allInOne();