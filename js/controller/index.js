(function(){

angular.module('EventsApp').controller('EventsController', ['$scope', '$window', function($scope, $window){

    // Controller properties
    // Scope variables
    // action: {"init", "add-films"}
    $scope.action = "init";   
    
    $scope.mouseDoubleClick = function() {
        $scope.countMouseDoubleClick++;
    }

    $scope.mouseDoubleClick = function() {
        $scope.countMouseDoubleClick++;
    }

    
    $scope.showMenu = function() {
        $scope.showMe = !$scope.showMe;
    }

    $scope.updateCoordinates = function(event) {
        $scope.x = event.clientX;
        $scope.y = event.clientY;
       // console.log(event);
    }

    $scope.keyPressed = function(event) {
        console.log(event);
    }
    
  }]);

/* angular.module('EventsApp').directive("addFilmsViewForm", function () {
  return {
    restrict: 'E', // type of directive
    templateUrl:"view/templates/add-films-view-form.html",
    controller: function() {
      // When the document is ready execute this code
    },
    controllerAs: 'addFilmsViewFormCtrl' // This is the alias
  };
}); */

})();
