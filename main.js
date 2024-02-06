function* generator() {

    let e1 = yield 'Primeira execução';

    yield 'Segunda execução'; // O que for passado como parâmetro no next aqui vai para a variavel e1

    // Vem parametro do next
    console.log(e1);
    return 'Fim';
    
}

