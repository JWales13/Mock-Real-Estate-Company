app.controller('ListingController', ['ListingService', function (ListingService) {
    var self = this;

    self.listings = ListingService.listings;
    ListingService.getCollections();
}]);