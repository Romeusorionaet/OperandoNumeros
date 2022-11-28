import {n1, n2, changeStyle} from "./elements.js"

export default function Modal({
    screenList,
    screenOperation,
    screenResult
}) {
    function toggleScreenEnd(){
        screenOperation.classList.toggle("hide");
        screenResult.classList.toggle("hide");
    }
    
    function toggleScreen(){
        screenList.classList.toggle("hide");
        screenOperation.classList.toggle("hide");
        reset();
    }
    
    function reset(){
        n1.value = '';
        n2.value = '';
    }

    function verificationInputValue(){
        let cleanField = (n1.value && n2.value) == ''
        if(cleanField == true){
            alert('Existe campo vazio')
            return true
        }
    }

    function changeValueColor(value) { 
        if(value == false){
            localStorage.setItem('storedValue', 
            changeStyle.style.backgroundImage = "url(img/backgroundNight.png)");

            localStorage.setItem('storedValue', changeStyle.style.color="white")    
        }else{
            localStorage.setItem('storedValue', 
            changeStyle.style.backgroundImage = "url(img/backgroundMorning.jpg)");

            localStorage.setItem('storedValue', changeStyle.style.color="black")
        }
    }
    return {
        toggleScreenEnd,
        toggleScreen,
        reset,
        changeValueColor,
        verificationInputValue
    }
}

