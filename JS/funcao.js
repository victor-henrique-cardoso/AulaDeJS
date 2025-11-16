function AreaQuadrado(lado){
    return lado *lado;
}



console.log(AreaQuadrado(4))

function imc(){   
    let peso = Number(document.getElementById("peso").value);
    let altura = Number(document.getElementById("altura").value);

    let imctotal = peso / (altura *altura)

    document.getElementById("imcr").textContent = "Seu IMC é :" + imctotal;
    document.getElementById("peso").value = "";
    document.getElementById("altura").value = "";
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

      document.getElementById("n1").value = "";
      document.getElementById("n2").value = "";
      document.getElementById("n3").value = "";

    
}


function PerimetroQuadrado(){
    let cm = Number(document.getElementById("cm").value);

    let cmr = 4 * cm;

    document.getElementById("cmr").textContent= "O perimetro do quadrado é: " + cmr;

      document.getElementById("cm").value = "";
}

function NomeCompleto(){
    var nome = document.getElementById("nome").value;

    document.getElementById("nomer").textContent = "Seu Nome é: " + nome;
    document.getElementById("nome").value = "";
}

function Par(){
    let nu = Number(document.getElementById("numero").value);

    if(nu % 2 == 0){
        document.getElementById("parr").textContent = "O Numero " + nu + " é par ";
    }
    else{
         document.getElementById("parr").textContent = "O Numero " + nu + " não é par ";
    }

      document.getElementById("numero").value = "";
}

addEventListener("scroll", function(){

    this.document.getElementById("rolou").textContent = "Victor henrique"
});


//esse nao foi eu só usei pra testar o chat do vscode muito bom nmrl 
function CalcularQuantidadeNumeros(){
    let quantidade = Number(document.getElementById("quantidade").value);
    let resultado = "";

    for(let i = 1; i <= quantidade; i++){
        resultado += i + " ";
    }

    document.getElementById("resultadoNumeros").textContent = "Números: " + resultado;
    document.getElementById("quantidade").value = "";
}