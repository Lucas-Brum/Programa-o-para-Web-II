 function ListaComprasController($scope) {

    $scope.itens = [
 
        {produto: 'Arroz', quantidade: 2, comprado: false},
 
        {produto: 'Guarana', quantidade: 12, comprado: false}
 
    ];
 
 
    $scope.adicionaItem = function () {
 
        $scope.itens.push({produto: $scope.item.produto,
 
                           quantidade: $scope.item.quantidade,
 
                           comprado: false});
 
        $scope.item.produto = $scope.item.quantidade = '';
 
    };
 
 }