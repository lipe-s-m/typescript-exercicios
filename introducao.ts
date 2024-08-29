console.log("Hello World");

let nome: string = "Felipe";
const idade: number = 19;
const isProgrammer: boolean = true;

console.log("variaveis: " + nome, idade, isProgrammer);

//arrays
let numeros: number[] = [1, 2, 3, 6, 5, 4, 3];
numeros.push(6);
numeros.push(3);
numeros.pop();
console.log("Lista de Numeros: " + numeros);

let nomes: string[] = [];
nomes.push("Felipe");
nomes.push("Duda");
nomes.push("Serei Apagado");
nomes.pop();

console.log("Lista de Nomes: " + nomes);

//funcoes
function soma(a: number, b: number): number {
  return a + b;
}
console.log("Resultado da soma: " + soma(1, 4));

//tipos
type Aluno = {
  nome: string;
  idade: number;
  casado: boolean;
  nacionalidade: Nacionalidade;
};

//enums
enum Nacionalidade {
  Brasileiro = "Brasileiro",
  Alemao = "Alemão",
  Holandes = "Holandês",
  Japones = "Japonês",
  Outro = "Outro",
}

//objetos
let aluno1: Aluno = {
  nome: "Felipe",
  idade: 19,
  casado: false,
  nacionalidade: Nacionalidade.Brasileiro,
};
console.log("objeto do tipo aluno abaixo: ");
console.log(aluno1);

console.log("------------");

//classes
class Pessoa {
  // aluno: Aluno;
  // constructor(aluno: Aluno){
  //     this.aluno = aluno;
  // }

  fazerAniversario(aluno: Aluno): void {
      aluno.idade++;
    console.log(`Parabens pra mim!!! Agora tenho ${aluno.idade} anos!`);
  }
}

let pessoa1 = new Pessoa();
pessoa1.fazerAniversario(aluno1);
pessoa1.fazerAniversario(aluno1);

