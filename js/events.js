import {
    btnCheckBox,
    btnStart,
    btnReturn,
    clickBtnStart,
    turnStart,
    changeStyle,
    screenList,
    screenResult
} from "./elements.js"

export default function Events({modal, checkerEvenOddEqualsDifferent}) {
    clickBtnStart.addEventListener('click', function getCalc(n1, n2){
        modal.toggleScreenEnd();
      
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
        checkerEvenOddEqualsDifferent(n1, n2);
    });
    btnCheckBox.addEventListener('change', function checkBoxVerification(){
        if(this.checked){
            changeStyle.style.color="white";
            changeStyle.style.backgroundImage = "url(img/backgroundNight.png)";
        }else{
            changeStyle.style.color="black";
            changeStyle.style.backgroundImage = "url(img/backgroundMorning.jpg)";
        }
    });
    turnStart.addEventListener('click', function toggleEndStart(){
        screenList.classList.toggle("hide");
        screenResult.classList.toggle("hide");
        modal.reset();
    });
    btnStart.addEventListener('click', modal.toggleScreen);
    btnReturn.addEventListener('click', modal.toggleScreen);
}

