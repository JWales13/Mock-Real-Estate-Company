app.controller('ListingController', ['ListingService', function (ListingService) {
    var self = this;

    self.listings = ListingService.listings;
    self.addProperty = ListingService.addProperty;
    self.newProperty = ListingService.newProperty;
    self.deleteThis = ListingService.deleteThis;
    ListingService.getCollections();
}]);