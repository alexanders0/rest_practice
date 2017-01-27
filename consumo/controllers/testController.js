angular.module('myApp', ['testService']);

angular.module('myApp').controller('testController', ['$scope','testRequest',testController]);
function testController($scope, testRequest) {
	$scope.posts={};
	$scope.mensaje="";
	$scope.getAllEstudiantes = function(){
		testRequest.posts().then(function (data){
      console.log("...");
      console.log(data.data);
			$scope.posts=data.data; // Asignaremos los datos de todos los posts
			$scope.posts.exist=1;
		});
	}
	$scope.getEstudiante = function(){
		$scope.unPost={};
		testRequest.post($scope.post_id).then(function (data){
			$scope.unPost=data.data; // Asignaremos los datos del post
			$scope.unPost.exist=1;
			$scope.posts.exist=0;
		});
	}
  $scope.crear = function(){
    datos = {'nombre': $scope.a.nombre,'apellido': $scope.a.apellido,'cedula': $scope.a.cedula,'ciudad': $scope.a.ciudad,'provincia': $scope.a.provincia}
		testRequest.add_post(datos).then(function (data){
			$scope.mensaje=data.status; // Asignaremos los datos del post
      console.log(data);
		});
	}

}
