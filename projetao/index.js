const produtos = require('./database')
const input = require('readline-sync')

console.log("----------------------------")
console.log("PROJETO CARRINHO DE COMPRAS")
console.log("Júlia De Melo")
console.log("----------------------------")

const carrinho = []
const quantidade = []
let categoriaQuestion = input.question('Você deseja procurar por categoria ? (S/N)')

/////////////////BUSCA POR CATEGORIA////////////////////
function categoria(val){
    if(val.toLocaleUpperCase() == "S"){
        console.log("----------------------------")
        console.log("As categorias são:")
        for(i=0;i<produtos.length;i++){
            console.log("----------------------------")
            console.log(produtos[i].categoria)
            
        }
        console.log("----------------------------")
        const qualProduto = input.question("Digite a cateforia que deseja consultar:")
        const categoriaProduto = produtos.filter(categ => categ.categoria == qualProduto.toLocaleLowerCase())
        console.table(categoriaProduto)
    }else{
        console.log("----------------------------")
        console.log("Esses são todos os produtos:")
        console.log("----------------------------")
        const filtroPreco = produtos.filter(pre => pre.preco > 0)
        const a = filtroPreco.sort(function (a, b) {
	
            return (a.preco > b.preco) ? 1 : ((b.preco > a.preco) ? -1 : 0);
         
        });
        console.table(a)
    }
}
categoria(categoriaQuestion)

///////////////////// CARRINHO DE COMPRAS////////////////////////////
let idProduto = input.question("Digite o ID do produto que você deseja: ")

function adicionarCarrinho(val,arr,arrey2){
    const ide = Number(val)
    if(ide < 9){
        let quantidadeProduto = input.question("Digite a quantidade de produtos que deseja: ")

        // para puxar a quantidade de produtos que a pessoa consumiu
        arrey2.push(Number(quantidadeProduto))

        //para buscar o preco do produto
        const preco = produtos[ide-1].preco
        // calcular o preco mais a quantidade que a pessoa pegou
        const total = Number(quantidadeProduto) * Number(preco)
        //puxando para um array o valor total (nesse array fica contido todos os valores que precisa pagar)
        arr.push(total)

        //repeticao caso queira comprar mais
        let adicionarProduto = input.question("Deseja continuar comprando ? (S/N) ")
        if(adicionarProduto.toLocaleUpperCase() == "S"){
            let idNovo= input.question("Digite o ID do produto que você deseja: ")
            //passo a função novamente com o novo id e o array com os valores já nele
            adicionarCarrinho(idNovo,arr,arrey2)
        }else{
            console.log("--------------------")
            console.log("Pedido Encerrado")
            console.log("--------------------")
        }

    }else{
        console.log("Digite um ID valido")
    }
}

adicionarCarrinho(idProduto,carrinho,quantidade)

/////////////////////TOTAL///////////////////////////////////
let totalQuantidade = quantidade.reduce((total, currentElement) => total + currentElement)
console.log(`Seu pedido possui ${quantidade} itens`)
let totalPreco = carrinho.reduce((total, currentElement) => total + currentElement)

//Data Pedido
const diaDoPedido = new Date()
const dataFormatada = diaDoPedido.toLocaleDateString('pt-BR')

console.log(`Sua compra deu o total de ${totalPreco} reais - Feito em ${dataFormatada}`)


////////////////////////DESCONTO///////////////////////////
console.log("----------------------")
let cupomQuestion = input.question("Tem algum cupom de desconto ? (S/N) ")


function desconto(val,arr){
    if(val.toLocaleUpperCase() == "S"){
        let cupomValor = input.question("Digite o valor do desconto:")
        const des = Number(cupomValor)
        let total = arr.reduce((total, currentElement) => total + currentElement)
        let calc = total * (des/100)

        
        


        console.log(`Desconto de ${calc} reais`)
        console.log("----------------------")
        console.log(`Total a pagar ${total - calc} reais - Feito em ${dataFormatada}`)
    }
    

}


desconto(cupomQuestion, carrinho)
