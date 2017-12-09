app.controller('RentalController', ['RentalService', function (RentalService) {
    var self = this;
    
    self.rentals = RentalService.rentals;
    RentalService.getCollections();
}]);