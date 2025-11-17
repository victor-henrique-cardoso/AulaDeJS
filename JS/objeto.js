var Pessoa  ={
    nome : "henrique",
    idade: 17,
    profissao: "estudante",
    faculdade: "Cursando tecinico entrado ao encino medio ",
}

var quadrado ={

    lados: 4,
    area: function(lado){
        return lado * lado;
    },
    perimetro: function(lado){
        return this.lados * lado;
    }
}

console.log(quadrado.area(5));

console.log(Pessoa.nome);
console.log(Pessoa.idade);
console.log(Pessoa.profissao);
console.log(Pessoa.faculdade);

var dadospessoais ={
    nome: "Victor Henrique",
    sobrenome: "ferreira cardoso",
    idade: 17,
    cpf: "123.456.789-00",
    fone: "(11) 91234-5678",
    email: "teste@gmail.com",

    nomecompleto: function(){
        return this.nome + " " + this.sobrenome;
    }
}

console.log(dadospessoais.nomecompleto());