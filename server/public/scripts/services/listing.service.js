app.service('ListingService',['$http', function($http){
    var self = this;
    self.listings = { list: [] };

    self.getCollections = function(){
        $http({
            method: 'GET',
            url: '/listing'
        }).then(function(response){
            console.log(response.data);
            self.listings.list = response.data;
        })
    }
}]);  