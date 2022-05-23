//função para inserir números
function insert(num){
    var numero = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = numero + num
}

//função para limpar o campo
function clean () {
    document.getElementById('resultado').innerHTML = ""
}


//função para apagar somente um número (o que está na última posição)
function back(){
    var resultado = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1)
}

//função para calcular 
function calcular(){
    var resultado = document.getElementById('resultado').innerHTML
    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado)
    }
}