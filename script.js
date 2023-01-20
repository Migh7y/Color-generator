let redRange = document.querySelector('#red-range');
let greenRange = document.querySelector('#green-range');
let blueRange = document.querySelector('#blue-range');

let body = document.querySelector('body');

redRange.addEventListener('input', function(){
    let redValue = redRange.value;
    let greenValue = greenRange.value;
    let blueValue = blueRange.value;

    body.style.backgroundColor = 'rgb(' + redValue + ',' + greenValue + ',' + blueValue + ')' ;
});

greenRange.addEventListener('input', function(){
    let redValue = redRange.value;
    let greenValue = greenRange.value;
    let blueValue = blueRange.value;

    body.style.backgroundColor = 'rgb(' + redValue + ',' + greenValue + ',' + blueValue + ')';
});

blueRange.addEventListener('input', function(){
    let redValue = redRange.value;
    let greenValue = greenRange.value;
    let blueValue = blueRange.value;

    body.style.backgroundColor = 'rgb(' + redValue + ',' + greenValue + ',' + blueValue + ')';
});

let myBtn = document.querySelector('#myBtn');

myBtn.addEventListener('click', function(){
    let randomNumber = Math.floor(Math.random() * 255);
    let randomNumber2 = Math.floor(Math.random() * 255);
    let randomNumber3 = Math.floor(Math.random() * 255);

    body.style.backgroundColor = 'rgb(' + randomNumber + ',' + randomNumber2 + ',' + randomNumber3 + ')';

    redRange.value = randomNumber;
    greenRange.value = randomNumber2;
    blueRange.value = randomNumber3;
})