function* generator() {

    let e1 = yield 'Primeira execução';

    yield 'Segunda execução'; // O que for passado como parâmetro no next aqui vai para a variavel e1

    // Vem parametro do next
    console.log(e1);
    return 'Fim';
    
}

function promises1() {

    let resposta = {};

        let promise = new Promise((resolve, reject) => {

            
            try {

                setTimeout(() => {
                    resposta = {dados: { msg: 'Teste'}};
                    resolve('Sucesso');
                    
                    console.log(promise);
                    console.log(resposta);
                }, 3000);

            } catch (e) {

                setTimeout(() => {
                    reject(e);
                }, 3000);

            }
        });

        console.log(promise);
        console.log(resposta);
}

function promises2()
{
    let resposta = {};

    let promise = new Promise((resolve, reject) => {
        
        setTimeout(() => {

            try {

                // simulando http request
                let erro = false;
                // erro = true;
                if (erro) {

                    resposta = {
                        codigo: '404',
                        mensagem: 'Erro'
                    }; 

                    reject(resposta);
                } else {

                    resposta = {
                        codigo: '200',
                        id: 1,
                        nome: 'Teste'
                    };

                    resolve(resposta);
                }

            } catch (e) {
                reject(e);
            }
        }, 3000);
    
    }).then(response => {
        console.log(response);
        if (response.id != undefined) {
            return response.id;
        }
    }).then(response => {
        console.log(response);
    }).catch(error => {
        console.log(error);
    });

}

function fnWeakMap() {

    obj1 = {
        nome: 'Kyle Walker',
        brand: 'Real Skateboards'
    };

    obj2 = {
        nome: 'Trevor Colden',
        brand: 'Skatemental'
    };

    const objetos = new WeakMap();
    objetos.set(obj1, "Informações do objeto 1");
    objetos.set(obj2, "Informações do objeto 2");

    console.log(objetos);

    // será removido também do weakmap através do garbage collector do JS, podendo demorar alguns minutos
    obj2 = null;

    console.log(objetos)
}

function arrayInclude()
{

    let arr = ['banana', 'maça', 'uva'];

    // find retorna o valor encontrado ou undefined
    let retorno = arr.find(item => item == 'maça');
    console.log(retorno);

    // includes verifica se existe retorando true ou false, mais pratico como um isset em php
    let retorno2 = arr.includes('maça');
    console.log(retorno2);
}

