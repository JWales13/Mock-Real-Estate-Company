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
        $http({
            method: 'POST',
            url: '/rental',
            data: newProperty
        }).then(function(response){
            self.newProperty.rent = '';
            self.newProperty.sqft = '';
            self.newProperty.city = '';
            self.getCollections();
        })//end .then
    };//end addProperty

    self.deleteThis = function(property){
        $http({
            method: 'DELETE',
            url: '/rental/' + property._id,
            data: property
        }).then(function(response){
            self.getCollections();
        })//end .then
    };//end delete



}]);    