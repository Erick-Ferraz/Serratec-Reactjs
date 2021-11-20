const lista = ["a", "b", "c", "d"];

//forOf
for (let item of lista) {
    console.log(item)
}

//forEach
lista.forEach(paraCada);

function paraCadaItem(item) {
    return "Bom dia " + item;
}

//map
const list = ["a", "b", "c", "d"];
let retorno = lista.map(paraCadaItem);

console.log("O retorno foi", retorno);

//filter
const numeros = [0, 1, 2, 3, 4, 5, 6];

//Lambda, equivalente ao where do SQL
//Filtra numeros pares
function pares(item) {
    return item % 2 == 0;
}

//Fitra array de nomes pela letra M
let pares = numeros.filter(pares);
console.log("Filtrados números pares", pares);

function fn(aluno) {
    let letra = aluno.substr(0,1);
    return letra == "M";
    }
    
alunos.filter(fn)