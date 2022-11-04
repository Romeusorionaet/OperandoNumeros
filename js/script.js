let btnCheckBox = document.querySelector('#btnCheckBox');
let btnStart = document.querySelector('#showBtnStart');
let btnReturn = document.querySelector('#btnReturn');
let clickBtnStart = document.querySelector('#btnCalc');
let turnStart = document.querySelector('#turnStart');

let screenList = document.querySelector('.list');
let screenOperation = document.querySelector('.screenOperation');
let screenResult = document.querySelector('.screenResult');

let n1 = document.querySelector('#number1');
let n2 = document.querySelector('#number2');

let changeStyle = document.querySelector('body');

clickBtnStart.addEventListener('click', getCalc);
btnStart.addEventListener('click', toggleScreen);
btnReturn.addEventListener('click', toggleScreen);
btnCheckBox.addEventListener('change', checkBoxVerification);
turnStart.addEventListener('click', toggleEndStart);

function getCalc(n1, n2){
    toggleScreenEnd();
  
    n1 = Number(document.querySelector('#number1').value);
    n2 = Number(document.querySelector('#number2').value);
    
    let listResult = [
        `A soma dos números é de: ${n1 + n2}`,
        `A subtração dos números é de: ${n1 - n2}`,
        `A multiplicação dos números é de: ${n1 * n2}`,
        `A divisão dos números é de: ${(n1 / n2).toFixed(2)}`,
        `O resto da divisão dos números é de: ${n1 % n2}`,
    ]
    for(let _wayList of listResult){
        screenResult.querySelector('ul').innerHTML = listResult.join("<br>");
    }
    getIf(n1, n2);
}

function getIf(n1, n2){
    
    let even = `A soma dos dois números: ${n1} + ${n2}, resulta em um novo número: ${n1 + n2} PAR.`;
    let odd = `A soma dos dois números: ${n1} + ${n2}, resulta em um novo número: ${n1 + n2} IMPAR.`
    let equals = `O número: ${n1}, é igual ao número: ${n2}, Números iguais.`;
    let different = `O número: ${n1}, não é igual ao número: ${n2}, Números diferentes.`;

    let parOrImp = (n1 - n2) == 0;
    if(parOrImp == true){
        screenResult.querySelector('#li1').innerHTML = even;
    }else{
        screenResult.querySelector('#li1').innerHTML = odd;
    }

    let mirror = n1 == n2;
    if(mirror == true){
        screenResult.querySelector('#li2').innerHTML = equals;
    }else{
        screenResult.querySelector('#li2').innerHTML = different;
    }
}

function toggleScreenEnd(){
    screenOperation.classList.toggle("hide");
    screenResult.classList.toggle("hide");
}

function toggleScreen(){
    screenList.classList.toggle("hide");
    screenOperation.classList.toggle("hide");
    reset();
}

function toggleEndStart(){
    screenList.classList.toggle("hide");
    screenResult.classList.toggle("hide");
    reset();
}

function reset(){
    n1.value = '';
    n2.value = '';
}

function checkBoxVerification(){
    if(this.checked){
        changeStyle.style.color="white";
        changeStyle.style.backgroundImage = "url(img/backgroundNight.png)";
    }else{
        changeStyle.style.color="black";
        changeStyle.style.backgroundImage = "url(img/backgroundMorning.jpg)";
    }
}
