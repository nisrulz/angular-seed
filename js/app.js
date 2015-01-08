/**
 * angularSimpleWebApp Module
 *
 * Description
 */
var app = angular.module('angularSimpleWebApp', ['ngRoute', 'ngAnimate']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/view_page1.html',
            controller: 'Page1Ctrl',
            controllerAs: 'page1'
        })
        .when('/page1', {
            templateUrl: 'views/view_page1.html',
            controller: 'Page1Ctrl',
            controllerAs: 'page1'
        })
        .when('/page2', {
            templateUrl: 'views/view_page2.html',
            controller: 'Page2Ctrl',
            controllerAs: 'page2'
        })
        .when('/page3', {
            templateUrl: 'views/view_page3.html',
            controller: 'Page3Ctrl',
            controllerAs: 'page3'
        })
        .when('/page4', {
            templateUrl: 'views/view_page4.html',
            controller: 'Page4Ctrl',
            controllerAs: 'page4'
        })
        .when('/page5', {
            templateUrl: 'views/view_page5.html',
            controller: 'Page5Ctrl',
            controllerAs: 'page5'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);

//Setting HTML5 Location Mode
app.config(['$locationProvider',
    function($locationProvider) {
        $locationProvider.hashPrefix("!");
    }
]);
