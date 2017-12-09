app.controller('ListingController', ['ListingService', function (ListingService) {
    var self = this;

    self.listings = ListingService.listings;
    self.addProperty = ListingService.addProperty;
    self.newProperty = ListingService.newProperty;
    ListingService.getCollections();
}]);