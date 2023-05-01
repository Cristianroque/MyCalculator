const C = document.getElementById("C");
const DE = document.getElementById("DE");
const ponto = document.getElementById(".");
const divisão = document.getElementById("/");

const sete = document.getElementById("7");
const oito = document.getElementById("8");
const nove = document.getElementById("9");
const X = document.getElementById("X");

const quatro = document.getElementById("4");
const cinco = document.getElementById("5");
const seis = document.getElementById("6");
const subtracao = document.getElementById("-");

const um = document.getElementById("1");
const dois = document.getElementById("2");
const tres = document.getElementById("3");
const soma = document.getElementById("+");

const DoisZero = document.getElementById("00");
const zero = document.getElementById("0");
const resultado = document.getElementById("=");

var display = document.getElementById("display");

function resultadoDisplay(n) {
    if(n == '1') {
        display.value += '1';
    } else if(n == '2') {
        display.value += '2';
    }
    else if(n == '3') {
        display.value += '3';
    }
    else if(n == '4') {
        display.value += '4';
    }
    else if(n == '6') {
       display.value += '6';
    }
    else if(n == '7') {
        display.value += '7';
    }
    else if(n == '8') {
        display.value += '8';
    }
    else if(n == '9') {
        display.value += '9';
    } 
    else if(n == '0') {
        display.value += '0';
    } else if(n == '00') {
        display.value += '00';
    }
    else if(n == '/') {
        display.value += '/';
    } 
    else if(n == '.') {
        display.value += '.';
    } 
    else if(n == '+') {
        display.value += '+';
    } 
    else if(n == '-') {
        display.value += '-';
    } 
    else if(n == '*') {
        display.value += '*';
    } 
    else if(n == '5') {
        display.value += '5';
    } 
}

function limpar(){
    display.value = '';
}
function excluir1(){
    display.value = display.value.toString().slice(0,-1);
}

function pegarResultado(){
   display.value = eval(display.value);
}




