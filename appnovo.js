var app=angular.module('myApp', []);

// alternate - https://github.com/michaelbromley/angularUtils/tree/master/src/directives/pagination
// alternate - http://fdietz.github.io/recipes-with-angular-js/common-user-interface-patterns/paginating-through-client-side-data.html

app.controller('MyCtrl', ['$scope','$http', '$filter', function ($scope,$http, $filter) {
    $scope.currentPage = 0;
    $scope.pageSize = 8;
    $scope.data = [];
    $scope.q = '';
    $scope.listamaquinas = [];
    $scope.listaoperador = [];
    
    $scope.mostraTagCC = false;
    $scope.mostraTagMaquina = false;
    $scope.mostraTagOperador = false;      
    
    
    $scope.setClickedRow = function(item,index){  //function that sets the value of selectedRow to current index
     
         $scope.listamaquinas = item;
         $scope.mostraTagCC = true;
         $scope.mostraTagMaquina = false;

         $scope.showOperador = false;
        ///$scope.selectedRow = index;
    }   
    
    $scope.setClickedRowMaquinas = function(item) {
		$scope.listaoperador = item;
        $scope.mostraTagMaquina = true;
        $scope.showOperador = true;
	}

    
    $http.get("apontamentos.json").success(function(data) {
		$scope.data = data;
	})

    
    $scope.getData = function () {
      // needed for the pagination calc
      // https://docs.angularjs.org/api/ng/filter/filter
      return $filter('filter')($scope.data, $scope.q)
     
    }
    
    $scope.numberOfPages=function(){
        return Math.ceil($scope.getData().length/$scope.pageSize);                
    }
    
/*    for (var i=0; i<65; i++) {
        $scope.data.push("Item "+i);
    }*/
  // A watch to bring us back to the 
  // first pagination after each 
  // filtering
$scope.$watch('q', function(newValue,oldValue){             if(oldValue!=newValue){
	  $scope.currentPage = 0;
  }
},true);
}]);

//We already have a limitTo filter built-in to angular,
//let's make a startFrom filter
app.filter('startFrom', function() {
    return function(input, start) {
        start = +start; //parse to int
        return input.slice(start);
    }
});
