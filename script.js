/*VARIABLES*/
let btnStart = document.querySelector('#showBtnStart');
let btnCheckBox = document.querySelector('#btnCheckBox');
let btnReturn = document.querySelector('#btnReturn');
let clickBtnStart = document.querySelector('#btnCalc');
let turnStart = document.querySelector('#turnStart');

let n1 = document.querySelector('#number1');
let n2 = document.querySelector('#number2');

let screenList = document.querySelector('.list');
let screenOperation = document.querySelector('.screenOperation');
let screenResult = document.querySelector('.screenResult');

let changeStyle = document.querySelector('body');

/*EVENTS*/
clickBtnStart.addEventListener('click', getCalc);
btnStart.addEventListener('click', toggleScreen);
btnReturn.addEventListener('click', toggleScreen);
btnCheckBox.addEventListener('change', checkBoxVerification);
turnStart.addEventListener('click', toggleEndStart);
/*FUNCTIONS*/

function getCalc(){
    toggleScreenEnd();

    let listResult = [
        `A soma dos números é de: ${Number(n1.value) + Number(n2.value)}`,
        `A subtração dos números é de: ${Number(n1.value) - Number(n2.value)}`,
        `A multiplicação dos números é de: ${Number(n1.value) * Number(n2.value)}`,
        `A divisão dos números é de: ${(Number(n1.value) / Number(n2.value)).toFixed(2)}`,
        `O resto da divisão dos números é de: ${Number(n1.value) % Number(n2.value)}`,
    ]
    for(let _wayList of listResult){
        screenResult.querySelector('ul').innerHTML = listResult.join("<br>");
    }
    getIf(n1, n2)
}

function getIf(n1, n2){

    let even = `A soma dos dois números: ${Number(n1.value)} + ${Number(n2.value)}, resulta em um novo número: ${Number(n1.value) + Number(n2.value)} PAR.`;
    let odd = `A soma dos dois números: ${Number(n1.value)} + ${Number(n2.value)}, resulta em um novo número: ${Number(n1.value) + Number(n2.value)} IMPAR.`
    let equals = `O número: ${Number(n1.value)}, é igual ao número: ${Number(n2.value)}, Números iguais.`;
    let different = `O número: ${Number(n1.value)}, não é igual ao número: ${Number(n2.value)}, Números diferentes.`;

    let parOrImp = (n1.value - n2.value) == 0;
    if(parOrImp == true){
        screenResult.querySelector('#li1').innerHTML = even;
    }else{
        screenResult.querySelector('#li1').innerHTML = odd;
    }

    let mirror = n1.value == n2.value;
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

function checkBoxVerification(){
    if(this.checked){
        changeStyle.style.color="white";
        changeStyle.style.backgroundImage = "url(img/backgroundNight.png)";
    }else{
        changeStyle.style.color="black";
        changeStyle.style.backgroundImage = "url(img/backgroundMorning.jpg)";
    }
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

