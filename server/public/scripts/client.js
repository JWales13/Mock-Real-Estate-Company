var app = angular.module('RealEstateApp', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider.when('/',{
        templateUrl: '/views/home.html',
        controller: 'HomeController as vm'
    }).when('/listing', {
        templateUrl: '/views/listings.html',
        controller: 'ListingController as vm'
    }).when('/rental', {
        templateUrl: '/views/rentals.html',
        controller: 'RentalController as vm'
    }).otherwise({
        template: '<h1>404</h1>'
    });
});