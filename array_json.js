/**********************************************************************************************************************************
* Objetivo: Aprender a trabalhar com estrutura de dados  Array e JSON                                                             *
* Data: 06/10/23                                                                                                                  *
* Autor: Igor Araujo                                                                                                              *
* Versão: 1.0                                                                                                                     * 
***********************************************************************************************************************************/

// [] -> Representa a estrutura array
// {} -> Representa a estrutura JSON

const introducaoArray = function () {
    // Criando um Array de forma manual 
    let listaDeNomes = ['José', 'Ana', 'Luiz', 'Maria', 'Carlos', 'Eduardo']

    // Exibe os dados do Array
    console.log(listaDeNomes);

    // Exibe os dados do Array em forma de tabela
    console.table(listaDeNomes);

    // Retorna a quantidade de elementos de um Array
    console.log(listaDeNomes.length);

    // Adiciona um nome no final da lista
    listaDeNomes.push('Roberto');

    // Adiciona um nome no começo da lista
    listaDeNomes.unshift('Ricardo')

    console.table(listaDeNomes);

    // Remove o ultimo elemento do Array
    listaDeNomes.pop();

    // Remove o primeiro elemento do Array
    listaDeNomes.shift();
    console.table(listaDeNomes);

    // Remover um elemento baseado no indice, podendo definir a quantidade de itens a serem excluídos
    // Ex: splice(2,3) -> 2 é referente a indice e 3 é referente a quantidade de itens
    listaDeNomes.splice(2, 3);
    console.table(listaDeNomes);


}

const percorrendoArray = function () {
    let listaDeProdutos = ['Mouse', 'Teclado', 'Monitor', 'Impressora', 'Mouse Pad', 'Gabinete', 'Processador', 'HD']

    // While
    // let cont = 0; 
    // while(cont < listaDeProdutos.length){
    //     console.log('Nome do produto: ' + listaDeProdutos[cont]);
    //     cont += 1;
    // }

    // For 
    // for(let cont=0; cont < listaDeProdutos.length; cont++) {
    //     console.log('Nome do produto: ' + listaDeProdutos[cont]);
    // }

    // Foreach
    // listaDeProdutos.forEach(function(produto, indice){
    //     console.log(indice + ' - Nome do produto: ' + produto)
    // })

    // Retorna o indice do Array que foi encontrado
    // Caso não exista o item buscado retorna -1
    console.log(listaDeProdutos.indexOf('Impressora'))

    // Retorna verdadeiro ou falso
    console.log(listaDeProdutos.includes('Monitor'))
}

const filtrarProduto = function (nomeProduto) {
    let listaDeProdutos = ['Mouse', 'Teclado', 'Monitor', 'Impressora', 'Mouse Pad', 'Gabinete', 'Processador', 'HD']
    let nome = String(nomeProduto);

    let status = false;

    // return listaDeProdutos.includes(nome);

    listaDeProdutos.forEach(function (produto) {
        if (produto.toUpperCase() == nome.toUpperCase())
            status = true;
    })

    return status;

}

const manipularArrayJson = function () {
    {
        /*
        Existem diversos tipos de dados para integração na tecnologia 
               Exemplo 1 - XML <atributo> valor </atributo>
        // Exemplo 2 - JSON {atributo: valor} -> JSON
        */

        //Criando um JSON manual
        let contato = { nome: "Igor Araujo", telefone: "40028922", email: "igor@gmail.com", idade: 16 };
        let contato2 = { nome: "Mineiro", telefone: "40028944", email: "mineiro@gmail.com", idade: 17 };
        let contato3 = { nome: "Calsolari", telefone: "40028966", email: "calsolari@gmail.com,", idade: 17 };
        let arrayContatos = [contato, contato2, contato3];

        // Criando novos atributos no JSON de forma dinamica
        // contato.celular = "959768574"
        // contato.data_nascimento = "2006-11-17"
        // console.log(contato)




        console.log(arrayContatos);



        // Percorrendo array e JSON:
        // Os ifs foram usados para validar a impressão dos valores
        arrayContatos.forEach(function (dados) {

            console.log("Nome: " + dados.nome);
            console.log("Telefone: " + dados.telefone);
            console.log("Email: " + dados.email);
            if (dados.celular != undefined)
                console.log("Celular: " + dados.celular);
            if (dados.data_nascimento != undefined)
                console.log("Data de nascimento: " + dados.data_nascimento);
            if (dados.idade != undefined)
                console.log("Idade: " + dados.idade);
            console.log("---------------------------")

        })
    }
}

const produtosArrayJson = function () {
    let listaCores = [
        { id: 1, nome: 'Branco' },
        { id: 2, nome: 'Preto' },
        { id: 3, nome: 'Cinza' },
        { id: 4, nome: 'Rosa' },
        { id: 5, nome: 'Vermelho' },
        { id: 6, nome: 'Azul' }
    ]

    let listaMarcas = [
        { id: 1, nome: 'Dell' },
        { id: 2, nome: 'Lenovo' },
        { id: 3, nome: 'Apple' },
        { id: 4, nome: 'Logitech' },
        { id: 5, nome: 'Positivo' },
        { id: 6, nome: 'Multilaser' },
        { id: 7, nome: 'Razer' },
    ]

    let listaCategorias = [
        { id: 1, nome: 'Hardware', descricao: 'Hardware' },
        { id: 2, nome: 'Periférico', descricao: 'Periférico' },
        { id: 3, nome: 'Gamer', descricao: 'Gamer' },
        { id: 4, nome: 'Acessórios', descricao: 'Acessórios' }
    ]

    // Cria um objeto do tipo JSON para o array de produtos 
    let JSONProdutos = []

    // Cria um array para guardar os produtos
    let ARRAYprodutos = []

    // Objeto para criar os produtos
    let produto1 = {
        id: 1,
        nome: 'Mouse',
        descricao: 'Mouse óptico com fio',
        categoria: listaCategorias[1],
        marca: listaMarcas[0],
        cor: [
            listaCores[0],
            listaCores[1],
            listaCores[2]
        ]
    }

    let produto2 = {
        id: 2,
        nome: 'Teclado',
        descricao: 'Teclado com fio padrão ABNT',
        categoria: listaCategorias[1],
        marca: listaMarcas[0],
        cor: listaCores
    }


    let produto3 = {
        id: 3,
        nome: 'Monitor',
        descricao: 'Monitor LED 24 polegadas',
        categoria: listaCategorias[1],
        marca: listaMarcas[1],
        cor: [
            listaCores[2],
            listaCores[4]
        ]
    }

    let produto4 = {
        id: 4,
        nome: 'Impressora',
        descricao: 'Impressora a jato de tinta',
        categoria: listaCategorias[3],
        marca: listaMarcas[2],
        cor: listaCores
    }

    let produto5 = {
        id: 5,
        nome: 'Monitor',
        descricao: 'Monitor 60hz',
        categoria: listaCategorias[2],
        marca: listaMarcas[4],
        cor: [
            listaCores[5],
            listaCores[1]
        ]
    }



    // Adicionando os produtos no array de produtos
    ARRAYprodutos.push(produto1)
    ARRAYprodutos.push(produto2)
    ARRAYprodutos.push(produto3)
    ARRAYprodutos.push(produto4)
    ARRAYprodutos.push(produto5)


    // Adiciona o atributo produto e colocoa o array de produtos
    JSONProdutos.produto = ARRAYprodutos

    // Adiciona o atributo count e oloca a quantidade de produtos
    JSONProdutos.count = ARRAYprodutos.length

    // Adiciona o atributo status e coloca o codigo 200 que é requisição bem sucedida
    JSONProdutos.status = 200

    console.log(JSONProdutos)
}

const listarProdutos = function () {

}



// produtosArrayJson()


//console.log(filtrarProduto('Mouse'));

// manipularArrayJson()
