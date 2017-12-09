app.service('RentalService',['$http', function($http){
    var self = this;
    self.rentals = { list: [] };
    self.newProperty = {};
    

    self.getCollections = function(){
        $http({
            method: 'GET',
            url: '/rental'
        }).then(function(response){
            self.rentals.list = response.data;
        })
    }

    self.addProperty = function(newProperty){
        console.log('button clicked: ', newProperty);
        $http({
            method: 'POST',
            url: '/rental',
            data: newProperty
        }).then(function(response){
            self.newProperty.cost = '';
            self.newProperty.city = '';
            console.log(response);
            self.getCollections();
        })//end .then
    };//end addProperty



}]);    