angular.module('app', []).controller('userController', function($scope) {
    $scope.user = {
        name: 'Yaroslav',
        age: 29,
        country: 'Ukraine',
        city: 'Kyiv',
        profession: 'frontend developer'
    };
    $scope.dishes = [
        {name: 'Borsch', price: 5},
        {name: 'Cutlet', price: 10},
        {name: 'Tea', price: 3}
    ];
});

