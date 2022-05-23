const resultado = document.querySelector(' .resultado ');
const confirmar = document.querySelector(' .btn-igual ');

function inserir(valor){
    resultado.innerHTML += valor;


}


function limparTudo() {
    resultado.innerHTML = ' ';
}


function limpar() {
    if(resultado.textContent){
        let result = document.getElementById('resultado').innerHTML
        resultado.innerHTML = result.substring(0, result.length - 1);
    } 
}


function confirma() {
    if(resultado.textContent != 'Erro') {
        document.getElementById("resultado").innerHTML = eval(resultado.innerHTML)
    }
}

function numNegativo(){
    let result
    let result2

    result = valor * 2;

    result2 = valor - resultado;

    return result2
}