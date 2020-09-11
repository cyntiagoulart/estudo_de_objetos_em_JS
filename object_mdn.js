// O básico sobre objetos JavaScript

// Criei um objeto vazio e estou verificando do tipo de dado, que é object.
// Quando criamos o objeto passando valores este é chamado de objeto literal.

let pessoa = {};
console.log(typeof pessoa); // retorna object

// Criei um objeto com chaves e valores, que são chamados de propriedades, e no caso de haver funções, essas são os métodos do objeto.
// As propriedades e métodos serão acessados pela notação de ponto.
// Exemplo de notação de ponto: pessoa2.idade
// Exemplo de notação de ponto com índice de array: pessoa2.nome[1]
// Exemplo de notação de ponto com método: pessoa2.saudacao()

let pessoa2 = {
	nome: ['Bob', 'Smith'],
	idade: 32,
	sexo: 'masculino',
	interesses: ['música', 'esquiar'],
	bio: function () {
		console.log(
			this.nome[0] +
				' ' +
				this.nome[1] +
				' tem ' +
				this.idade +
				' anos de idade. Ele gosta de ' +
				this.interesses[0] +
				' e ' +
				this.interesses[1] +
				'.'
		);
	},
	saudacao: function () {
		console.log('Oi! Eu sou ' + this.nome[0] + '.');
	},
};

console.log(typeof pessoa2);
console.log(pessoa2);
console.log(pessoa2.idade);
console.log(pessoa2.nome[1]);
console.log(pessoa2.saudacao());

// Para acessar o apelido ou sobrenome eu uso a notação de ponto da seguinte forma objeto.objeto.chave.

let pessoa3 = {
	nome: {
		apelido: 'Zé',
		sobrenome: 'Da Silva',
	},
};

console.log(pessoa3.nome.apelido); // retorna Zé
console.log(pessoa3.nome.sobrenome); // retorna Da Silva
console.log(pessoa3.nome); // retorna { nome: 'Zé', sobrenome: 'Da Silva' }

// Notação de colchetes
// É outra forma de acessar as propriedades do objeto usando-se colchetes e o valor entre '' ou "".

let pessoa4 = {
	nome: {
		apelido: 'Tatá',
		sobrenome: 'Werneck',
	},
	profissao: 'atriz',
	atividade: function () {
		console.log('Eu sou comediante.');
	},
};

console.log(pessoa4['nome']);
console.log(pessoa4['nome']['apelido']);
console.log(pessoa4['nome']['sobrenome']);
console.log(pessoa4['atividade']); //retorna [Function: atividade]
//console.log(pessoa4[atividade()]); //quebra o código porque método se chama com notação de ponto apenas, mas eu tinha que testar. :P

// Setando membros do objeto (atualização de valor)

let gato = {
	nome: 'Garfield',
	cor: 'laranja',
	tipo: 'gordo',
	comida: 'lasanha',
	voz: function () {
		return 'miau';
	},
	hobbie: 'dormir',
};
console.log(gato);
gato.cor = 'laranja com listras pretas'; // altera o valor da propriedade existente
gato.personalidade = 'divertido'; // adiciona uma propriedade se ela não existir
gato['amigo'] = 'Otis'; // adiciona uma propriedade com notação de colchetes,
console.log('para comparar');
console.log(gato);

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
padaria.restaurante = function () {
	console.log('Em breve');
};

console.log(padaria);
padaria.restaurante();

// A notação de colchetes pode ser usada não apenas para setar valores dinamicamente,
// mas também nomes de membros.

let estudante = {
	nome: 'Fábio',
	idade: 32,
};

console.log(estudante); // { nome: 'Fábio', idade: 32 }

let myDataName = 'altura';
let myDataValue = '1.75m';
estudante[myDataName] = myDataValue; // Adicionando a propriedade altura.

console.log(estudante.altura); 
console.log(estudante); // { nome: 'Fábio', idade: 32, altura: '1.75m' }
