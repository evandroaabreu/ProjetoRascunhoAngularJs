var app = angular.module('mainModule', []);

app.controller('mainController', function ($scope,$http) {
    $scope.mostraTagCC = false;
    $scope.mostraTagMaquina = false;
    $scope.mostraTagOperador = false;  
    
    $scope.lista = [];
    $scope.listaApt = [];
    $scope.listamaquinas = [];
    $scope.listaoperador = [];
    $scope.showOperador = false;
    
    $scope.pessoa = null;
    
    $scope.tagCC = null;
    $scope.tagMaquina = null;
    $scope.tagOperador = null;
    
  
    
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

    
    $scope.collapsibleElements = [{
        icon: 'mdi-image-filter-drama',
        title: 'First',
        content: 'Lorem ipsum dolor sit amet.'
    },{
        icon: 'mdi-maps-place',
        title: 'Second',
        content: 'Lorem ipsum dolor sit amet.'
    },{
        icon: 'mdi-social-whatshot',
        title: 'Third',
        content: 'Lorem ipsum dolor sit amet.'
    },{
        icon: 'mdi-social-whatshot',
        title: 'Third',
        content: 'Lorem ipsum dolor sit amet.'
    },{
        icon: 'mdi-social-whatshot',
        title: 'Third',
        content: 'Lorem ipsum dolor sit amet.'
    },{
        icon: 'mdi-social-whatshot',
        title: 'Third',
        content: 'Lorem ipsum dolor sit amet.'
    },{
        icon: 'mdi-social-whatshot',
        title: 'Third',
        content: 'Lorem ipsum dolor sit amet.'
    },{
        icon: 'mdi-social-whatshot',
        title: 'Third',
        content: 'Lorem ipsum dolor sit amet.'
    },{
        icon: 'mdi-social-whatshot',
        title: 'Third',
        content: 'Lorem ipsum dolor sit amet.'
    },{
        icon: 'mdi-social-whatshot',
        title: 'Third',
        content: 'Lorem ipsum dolor sit amet.'
    },{
        icon: 'mdi-social-whatshot',
        title: 'Third',
        content: 'Lorem ipsum dolor sit amet.'
    },{
        icon: 'mdi-social-whatshot',
        title: 'Third',
        content: 'Lorem ipsum dolor sit amet.'
    },{
        icon: 'mdi-social-whatshot',
        title: 'Third',
        content: 'Lorem ipsum dolor sit amet.'
    },{
        icon: 'mdi-social-whatshot',
        title: 'Third',
        content: 'Lorem ipsum dolor sit amet.'
    },{
        icon: 'mdi-social-whatshot',
        title: 'Third',
        content: 'Lorem ipsum dolor sit amet.'
    },{
        icon: 'mdi-social-whatshot',
        title: 'Third',
        content: 'Lorem ipsum dolor sit amet.'
    },{
        icon: 'mdi-social-whatshot',
        title: 'Third',
        content: 'Lorem ipsum dolor sit amet.'
    }
];

    
    
   $scope.specialityList = [
                                 {lookupId : 1, lookupName: 'speciality1'},
                                 {lookupId : 2, lookupName: 'speciality2'},

                                 {lookupId : 4, lookupName: 'speciality6'},
                                 {lookupId : 3, lookupName: 'speciality3'}
                                 ];

    $scope.user = {firstName: 'first name value', lookupId : 4};

    $scope.selectedSpecilaty = function()
    {
        alert($scope.user.lookupId);
    }    
    
    $scope.listOcurrence = [{
        date:'06/10/2015',
        timeE1:'08:00',
        timeS1:'',
        timeE2:'',
        timeS2:'',			            
        cores:'1',
        statusClass:'denied',
        textEmployeeComment: 'testeee' 
    },
    {
        date:'07/10/2015',
        timeE1:'17:50',
        timeS1:'',
        timeE2:'',
        timeS2:'',			            
        cores:'2',
        statusClass:'denied',
        textEmployeeComment: 'testeee'
    },
    {
        date:'08/10/2015',
        timeE1:'08:15',
        timeS1:'',
        timeE2:'',
        timeS2:'',			            
        cores:'3',
        statusClass:'denied',
        textEmployeeComment: 'testeee'
    },
    {
        date:'09/10/2015',
        timeE1:'',
        timeS1:'',
        timeE2:'',
        timeS2:'',			            
        cores:'3',
        statusClass:'denied',
        textEmployeeComment: 'testeee'
    }];					
    
    
    
    $scope.foodItems = [{
            name:'Noodles',
            price:'10',
            quantity:'1',
            cores:'1',
            img:'1' 
        },
        {
            name:'Pasta',
            price:'20',
            quantity:'2',
            cores:'1',
            img:'1' 
        },
        {
            name:'Pizza',
            price:'30',
            quantity:'1',
            cores:'2',
            img:'2' 
        },
        {
            name:'Chicken tikka',
            price:'100',
            quantity:'1',
            cores:'3',
            img:'3' 
        },
        {
            name:'Noodles',
            price:'10',
            quantity:'1',
            cores:'1',
            img:'1' 
        },
        {
            name:'Pasta',
            price:'20',
            quantity:'2',
            cores:'1',
            img:'1' 
        },
        {
            name:'Pizza',
            price:'30',
            quantity:'1',
            cores:'2',
            img:'2' 
        },
        {
            name:'Chicken tikka',
            price:'100',
            quantity:'1',
            cores:'3',
            img:'3' 
        },                    
        {
            name:'Chicken tikka',
            price:'100',
            quantity:'1',
            cores:'3',
            img:'3' 
        }
        ];
    
    
    
    function msg() {
         alert('Oi, Bem-Vindo!');
    }
    setTimeout("msg()",60000);
    
    
    $http.get("apontamentos.json").success(function(data) {
		$scope.listaApt = data;
	})

    
    $http.get('people.json').success(function(data){
        $scope.lista = data;     
    })
	
    $http.get('http://api.randomuser.me/?results=24').success(function(data) {
        $scope.users = data.results;
      }).error(function(data, status) {
        alert('get data error!');
      });
  
      $scope.removeUser = function(user){
         $scope.users.splice($scope.users.indexOf(user),1);
      };

      $scope.modalDetails = function(user){
         $scope.user = user;
         $('#modalDetails').openModal();
      };
    
    
    $scope.salvar = function(){
        
        var str = "R$ 50,00";
       var n = str.search("R"); 
        alert( n);
        
        
           var regular_expression = /R /;
           var strValue = "R$ 50,00";
           // Retorna true, pois existe a palavra valor na string
           alert( regular_expression.test( strValue ) );
        
        $scope.lista.push($scope.pessoa);
        $scope.pessoa = null;
    };

    $scope.remover = function(pessoa){
       var index = $scope.lista.indexOf(pessoa);
        $scope.lista.splice(index);
    };
    
    
    $scope.alterar = function(pessoa){
      $scope.pessoa = pessoa;
    };
    
/*
    $scope.selectedRow = null;  // initialize our variable to null
      $scope.setClickedRow = function(index){  //function that sets the value of selectedRow to current index
     $scope.selectedRow = index;
    }
*/
    $scope.selectedRow = null;  // initialize our variable to null




var sort = function(a){
      var sa = [],
          d = new Date(),
          ds = d.toDateString();

      for(var i = 0; i < a.length; i++){
        d = new Date(ds + ' ' + a[i]);
        sa.push(d);
      }

      sa.sort(function(a, b){return a.getTime() - b.getTime();})
      return sa;
}

    $scope.setHours = function(item){  //function that sets the value of selectedRow to current index


          // var horariosTTM = ['9:15', '10:20', '02:15','01:00', '17:30'];    
           var horariosTTM = [];    
           horariosTTM.push(item.timeE1); 
           horariosTTM.push(item.timeS1);
           horariosTTM.push(item.timeE2);
           horariosTTM.push(item.timeS2); 
           horariosTTM = sort(horariosTTM);

           for(var i=0; i<horariosTTM.length; i++) {
             var hora = horariosTTM[i].getHours();

             if (hora.toString().length === 1) {
                 hora = '0'+hora;
             }

             var minuto = horariosTTM[i].getMinutes();

             if (minuto.toString().length === 1) {
                 minuto = '0'+minuto;
             }

             var horaCompleta = hora + ':'+minuto;

             if (i === 0) {
                 item.timeE1 = horaCompleta;
             }

             if (i === 1) {
                 item.timeS1 = horaCompleta;             
             }

             if (i === 2) {
                 item.timeE2 = horaCompleta;             
             }

             if (i === 3) {
                 item.timeS2 = horaCompleta;             
             }


           }

        
                
        

  /*      var sHora1;
        var sHora2;
        var sHora3;
        var sHora4;
        var arHora3;
        var arHora4;
        var hh3;
        var mm3;
        var hh4;
        var mm4;

        
        if(item.timeE1 != "" && item.timeS1 != ""){
           sHora1 =  item.timeE1;
           sHora2 = item.timeS1;
            
            // Se tiver a entrada 2 preechida
           if(item.timeE2 != "") {
               sHora3 = item.timeE2;
               arHora3 = sHora3.split(":");
               hh3 = parseInt(arHora3[0],10); 
               mm3 = parseInt(arHora3[1],10);                
           }

            // Se tiver a Saida 2 preechida            
           if(item.timeS2 != "") {
               sHora4 = item.timeS2;
               arHora4 = sHora4.split(":");
               hh4 = parseInt(arHora4[0],10); 
               mm4 = parseInt(arHora4[1],10); 
               
           }
            
        }
        var arHora1 = sHora1.split(":"); 
        var arHora2 = sHora2.split(":"); 
        ///var arHora3 = sHora3.split(":"); 
        //var arHora4 = sHora4.split(":"); 

        // Obtener horas y minutos (hora 1) 
        var hh1 = parseInt(arHora1[0],10); 
        var mm1 = parseInt(arHora1[1],10); 

        // Obtener horas y minutos (hora 2) 
        var hh2 = parseInt(arHora2[0],10); 
        var mm2 = parseInt(arHora2[1],10); 

        //var hh3 = parseInt(arHora3[0],10); 
        //var mm3 = parseInt(arHora3[1],10); 

        //var hh4 = parseInt(arHora4[0],10); 
        //var mm4 = parseInt(arHora4[1],10); 
        
        // Comparar 
        if (hh1<hh2 || (hh1==hh2 && mm1<mm2)) 
            return "sHora1 MENOR sHora2"; 
        else if (hh1>hh2 || (hh1==hh2 && mm1>mm2)) {
            item.timeE1 = sHora2;
            item.timeS1 = sHora1;
           if(item.timeE2 != "") {
                var arHora1 = item.timeS1.split(":"); 
                var hh1 = parseInt(arHora1[0],10); 
                var mm1 = parseInt(arHora1[1],10); 
               
               // Se tiver a entrada 2 preechida               
               if (hh1>hh3 || (hh1==hh3 && mm1>mm3)) {
                    item.timeS1 = sHora3;
                    item.timeE2 = sHora1;                   
               }  
               
               // Se tiver a Saida 2 preechida            
           }
            
           // Se tiver a Saida 2 preechida                
           if(item.timeS2 != "") {
                var arHora1 = item.timeE2.split(":"); 
                var hh1 = parseInt(arHora1[0],10); 
                var mm1 = parseInt(arHora1[1],10); 
               // Se tiver a entrada 2 preechida               
               if (hh1>hh4 || (hh1==hh4 && mm1>mm3)) {
                    item.timeS2 = sHora1;
                    item.timeE2 = sHora4;                   
               }               
               
               
           }            
            
        }
            //return "sHora1 MAYOR sHora2"; 
        else  
            return "sHora1 IGUAL sHora2";    
*/
        
    }
    

 });