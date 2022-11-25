import {screenResult} from "./elements.js"

export default function checkerEvenOddEqualsDifferent(n1, n2){
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
