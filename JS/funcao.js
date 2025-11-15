function AreaQuadrado(lado){
    return lado *lado;
}



console.log(AreaQuadrado(4))

function imc(){   
    let peso = Number(document.getElementById("peso").value);
    let altura = Number(document.getElementById("altura").value);

    let imctotal = peso / (altura *altura)

    document.getElementById("imcr").textContent = "Seu IMC é :" + imctotal;
}


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



function CalcularMedia(){
    
    let n1 = Number(document.getElementById("n1").value);
    let n2 = Number(document.getElementById("n2").value);
    let n3 = Number(document.getElementById("n3").value);

    let media = (n1 + n2 + n3) / 3;
    document.getElementById("resultado").textContent = "A média é : " + media;
    
}


