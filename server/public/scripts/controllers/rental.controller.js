app.controller('RentalController', ['RentalService', function (RentalService) {
    console.log('RentalController is running');
    var self = this;
    
    self.rentals = RentalService.rentals;
    RentalService.getCollections();
}]);