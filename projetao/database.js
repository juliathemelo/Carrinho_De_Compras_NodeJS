class Compras{
    constructor(id,nome,descricao,categoria,preco){
        this.id = id
        this.nome = nome
        this.descricao = descricao
        this.categoria = categoria
        this.preco = preco
    }
}

const produto1 = new Compras(1,'Leite','Leite desnatado de 1 L','alimento',4)
const produto2 = new Compras(2,'Monitor','Monitor widescreen de várias polegadas','informatica',999)
const produto3 = new Compras(3,'Desifetante','Removedor de olho gordo para ambientes internos','casa',7)
const produto4 = new Compras(4,'Sabonete','Sabonete líquido de 200 mL com aroma de rosas','higiene',2)
const produto5 = new Compras(5,'Refrigerante','Bebida gaseificada de 2 L sabor guaraná','bebida',4)
const produto6 = new Compras(6,'Fralda','Fralda invisível para quando estiver se borrando de medo','higiene',22)
const produto7 = new Compras(7,'Mouse','Mouse Gamer','informatica',50)
const produto8 = new Compras(8,'Cloro','Água sanitária de 2L','casa',3)

const produtos = [produto1,produto2,produto3,produto4,produto5,produto6,produto7,produto8]

module.exports = produtos

// module.exports = {
//     produtos: [
//       {
//         id: 1,
//         nome: 'Leite',
//         descricao: 'Leite desnatado de 1 L',
//         categoria: 'alimento',
//         preco: 4,
//       },
//       {
//         id: 2,
//         nome: 'Monitor',
//         descricao: 'Monitor widescreen de várias polegadas',
//         categoria: 'informática',
//         preco: 999,
//       },
//       {
//         id: 3,
//         nome: 'Desinfetante',
//         descricao: 'Removedor de olho gordo para ambientes internos',
//         categoria: 'casa',
//         preco: 7,
//       },
//       {
//         id: 4,
//         nome: 'Sabonete',
//         descricao: 'Sabonete líquido de 200 mL com aroma de rosas',
//         categoria: 'higiene',
//         preco: 2,
//       },
//       {
//         id: 5,
//         nome: 'Refrigerante',
//         descricao: 'Bebida gaseificada de 2 L sabor guaraná',
//         categoria: 'bebida',
//         preco: 4,
//       },
//       {
//         id: 6,
//         nome: 'Fralda',
//         descricao: 'Fralda invisível para quando estiver se borrando de medo',
//         categoria: 'higiene',
//         preco: 22,
//       },
//       {
//         id: 7,
//         nome: 'Mouse',
//         descricao: 'Mouse gamer',
//         categoria: 'informática',
//         preco: 50,
//       },
//       {
//         id: 8,
//         nome: 'Cloro',
//         descricao: 'Água sanitária de 2L',
//         categoria: 'casa',
//         preco: 3,
//       },
//     ],
//   }