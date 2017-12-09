app.service('ListingService',['$http', function($http){
    var self = this;
    self.listings = { list: [] };
    self.newProperty = {};
   

    self.getCollections = function(){
        $http({
            method: 'GET',
            url: '/listing'
        }).then(function(response){
            self.listings.list = response.data;
        })
    }
    


    self.addProperty = function(newProperty){
        $http({
            method: 'POST',
            url: '/listing',
            data: newProperty
        }).then(function(response){
            self.newProperty.cost = '';
            self.newProperty.sqft = '';
            self.newProperty.city = '';
            self.getCollections();
        })//end .then
    };//end addProperty

    
    self.deleteThis = function(property){
        $http({
            method: 'DELETE',
            url: '/listing/' + property._id,
            data: property
        }).then(function(response){
            self.getCollections();
        })//end .then
    };//end delete


}]);  