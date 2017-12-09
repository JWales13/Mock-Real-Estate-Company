app.controller('RentalController', ['RentalService', function (RentalService) {
    var self = this;
    
    self.rentals = RentalService.rentals;
    self.addProperty = RentalService.addProperty;
    self.newProperty = RentalService.newProperty;
    RentalService.getCollections();
}]);