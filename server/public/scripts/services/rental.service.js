app.service('RentalService',['$http', function($http){
    var self = this;
    self.rentals = { list: [] };

    self.getCollections = function(){
        $http({
            method: 'GET',
            url: '/rental'
        }).then(function(response){
            self.rentals.list = response.data;
        })
    }
}]);    