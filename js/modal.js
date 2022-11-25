import {n1, n2} from "./elements.js"

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
    return {
        toggleScreenEnd,
        toggleScreen,
        reset
    }
}

