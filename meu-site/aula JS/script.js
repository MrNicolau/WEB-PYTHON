const btn = document.querySelectorAll('.butao')

btn[0].addEventListener('click', clicou)
btn[1].addEventListener('click', clicou)
btn[3].addEventListener('click', mudarCorFundo)


function clicou(){
alert('Você clicou aqui')
}

function mudarCorFundo(){
let color1 = (Math.random(255)*100).toFixed(0);
let color2 = (Math.random(255)*100).toFixed(0);
let color3 = (Math.random(255)*100).toFixed(0);

let cor = 'rgb('+color1+','+color2+','+color3+')'

// RGB(90,255,90)

document.querySelector('body').style.backgroundColor = cor
}

function soma(num1, num2){
    const resultado = num1 + num2
    return resultado
}

function produto(num1, num2){
    const resultado = num1 * num2
    return resultado
}

function subtracao(num1, num2){
    const resultado = num1 - num2
    return resultado
}

function divisao(num1, num2){
    const resultado = num1 / num2
    return resultado
}

function modulo(num1, num2){
    const resultado = num1 % num2
    return resultado
}

function potenciacao(num1, num2){
    const resultado = num1 ** num2
    return resultado
}



console.log('soma:', soma(77,33))
console.log('produto:', produto(5,5))
console.log('subtracao:', subtracao(66,33))
console.log('divisao:', divisao(321,123))
console.log('modulo:', modulo(543,213))
console.log('potenciacao:', potenciacao(9,2))