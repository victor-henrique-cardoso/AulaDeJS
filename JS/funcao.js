function AreaQuadrado(lado){
    return lado *lado;
}



console.log(AreaQuadrado(4))

function imc(peso, altura){
    var imctotal = peso / (altura *altura)
    return imctotal;
}

console.log(imc(60, 1.70))
console.log(imc(80, 1.90))

function maiorDeIdade(nome, idade ){
    if(idade < 18){
        return " Óla " + nome + " Voce é de menor" + "Sua idade é " + idade;
    }
    else{
         return " Óla " + nome + " Voce é de maior " + " Sua idade é " + idade;
    }
}

console.log(maiorDeIdade("Victor", 19))
console.log(maiorDeIdade("henrique", 16))

addEventListener('click', function(){

    console.log('oie')
}
);