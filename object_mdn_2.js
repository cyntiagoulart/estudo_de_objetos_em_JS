// Objeto-literal

let padaria = {
	nome: 'Pão de Ouro',
	endereco: 'Avenida Paulista, 1300',
	cidade: 'São Paulo',
	estado: 'SP',
	produtos: ['pão', 'biscoito', 'bolo', 'doce', 'sanduiche'],
	acao: function () {
		return 'O melhor pão da Paulista';
	},
};

// Adicionando um método setando 
padaria.restaurante = function() {console.log("Em breve");};

console.log(padaria);
padaria.restaurante();



// A notação de colchetes pode ser usada não apenas para setar valores dinamicamente, 
// mas também nomes de membros.

let estudante = {
    nome: 'Fábio',
    idade: 32,
};

let myDataName = 'altura';
let myDataValue = '1.75m';
estudante[myDataName] = myDataValue;

console.log(estudante.altura);
console.log(estudante);










