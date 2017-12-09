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
        console.log('button clicked: ', newProperty);
        $http({
            method: 'POST',
            url: '/listing',
            data: newProperty
        }).then(function(response){
            self.newProperty.cost = '';
            self.newProperty.city = '';
            console.log(response);
            self.getCollections();
        })//end .then
    };//end addProperty


}]);  