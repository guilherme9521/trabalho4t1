//1 - crie uma função que exiba uma mensagem no console

function carroFavorito() {
    console.log(`é meu carro favorito!`);
}

carroFavorito();

//2 - crie uma função que receba o seu nome como (parâmetro) e exiba no console

function meuNome(nome) {
    console.log(`Guilherme de Albuquerque ${nome}`);
}

meuNome("Venancio");

//3 - crie uma função que receba um nome, um número, e um estilo musical (parâmetros) e exiba no console

function oqueEugosto(nome, number, estilo) {
    console.log(`Meu nome é ${nome}, meu número favorito é ${number} e o estilo musical que amo ${estilo}!`);
}

oqueEugosto("Guilherme", "7", "HARDCORE");

//4 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console

function favorItos(filme, musica) {
    console.log(`${filme} / ${musica}`);
}

favorItos("Need for speed", "I am Loco");

//5 - crie uma função que retorne o triplo do número recebido no (parâmetro)

function numeRo(number){
    console.log(number * 3);
}

numeRo(`5`);