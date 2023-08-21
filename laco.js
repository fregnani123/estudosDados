
const pessoas = [
     { id: 1, nome: 'João', idade: 25, cidade: 'São Paulo' },
     { id: 2, nome: 'Maria', idade: 30, cidade: 'Rio de Janeiro' },
     { id: 3, nome: 'Pedro', idade: 22, cidade: 'Belo Horizonte' },
     { id: 4, nome: 'Ana', idade: 28, cidade: 'Curitiba' },
     { id: 5, nome: 'Lucas', idade: 24, cidade: 'Porto Alegre' },
];

for (let i of pessoas) {
     console.log(i)
}

const somaIdades = pessoas.reduce((total, pessoa, index, array) => total + pessoa.idade, 0);



const idades = pessoas.map(pessoas => pessoas.idade);

console.log(idades)

// const pessoasFilter = pessoas.filter(pessoa => pessoa.cidade = 'Rio de Janeiro');
// console.log(pessoasFilter)





// let n = 1

// for (let i = n; i <= 10; ++i){
   
//   console.log(i)
// }


// let i = 10

// while (i < 15 ) {
//     ++i;
//     console.log(i)
// }


// let nome = ["fabiano", "fernanda", "adair"];
// let novo = [];

// for (let i = 0; i < nome.length; i++) {
//      novo.push(nome[i].toUpperCase());
// }

// console.log(novo); // Output: ["FABIANO", "FERNANDA", "ADAIR"]


// const novoNomes = nome.forM









