'use strict'

angular.module('estoq' , [ ])
    .controller('prodApp' , prodApp)
    .controller('clienteApp' , clienteApp)
    .controller('fornecedorApp' , fornecedorApp)
    .filter ('price' , function( ) {
        return function(price) {
            if(price >= 15) return "margem baixa";
            else return "margem alta";
        }
    })
    .filter ('idade' , function() {
        return function(idade) {
            if(idade <= 18) return "Voce e menor de idade";
            else return "voce e maior de idade";
        }
    });
    
//prodApp
function prodApp() {
    var vm = this;
    vm.titulo = "Produtos";
    vm.produtos = [
         {produto: 'Sabão em po Omo' , quantidade: '400 caixas',preço:'R$ 16,75'}
        ,{produto: 'Coca cola garrafa 2,5L' , quantidade: '250 litros',preço:'R$ 6,85'}
        ,{produto: 'Arroz agulinha tipo 1 5KG' , quantidade: '200 kilos',preço:'R$ 15,90'}
        ,{produto: 'Achocolatado em po Nescau 400g' , quantidade: '30 unidades',preço:'R$ 5,69'}
    ];
}
prodApp['$inject'] = ['$scope'];

//clienteApp
function clienteApp() {
    var vm = this;
    vm.titulo = "Clientes";
    vm.clientes = [
       {nome: 'Maria' , email: 'email@asd17.net',telefone:'(11) 999-249-999'}
      ,{nome: 'Jose' , email: 'email@azert19.eu',telefone:'(12) 109-999-999'} 
      ,{nome: 'Carlos' , email: 'email@lol.com.ca',telefone:'(13) 999-888-999'} 
      ,{nome: 'paulo' , email: 'email@asd.net',telefone:'(21) 999-321-999'} 
      ,{nome: 'Pedro' , email: 'email@qwerty.br',telefone:'(31) 999-690-999'} 
    ];
}
clienteApp['$inject'] = ['$scope'];

//fornecedorApp
function fornecedorApp() {
    var vm = this;
    vm.titulo = "Fornecedores";
    vm.fornecedores = [
        {fornecedor: 'ASD alimentos' , email: 'asdal@asd.net',telefone:'(11) 999-456-999'}
       ,{fornecedor: 'Azerty representações' , email: 'contato@azerty.com.br',telefone:'(11) 692-999-999'}
       ,{fornecedor: 'Atacado 123' , email: 'falecomatacado123@atacado123.com.br',telefone:'(11) 999-478-999'}
       ,{fornecedor: 'Distribuidora qwerty' , email: 'dqwerty@systemcom.net',telefone:'(11) 999-999-888'} 
    ];
}
fornecedorApp['$inject'] = ['$scope'];



