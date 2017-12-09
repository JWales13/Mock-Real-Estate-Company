app.controller('ListingController', ['ListingService', function (ListingService) {
    console.log('ListingController is running');
    var self = this;

    self.listings = ListingService.listings;
    ListingService.getCollections();
}]);