var application = angular.module('app',['ngRoute',]);

application.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/profile', {
        templateUrl: '/static/js/templates/profile.html',
        controller: 'search_controller'
      })
      .when('/login', {
        templateUrl: '/static/js/templates/login.html',
        controller: 'authController'
      })
      .when('/register', {
        templateUrl: '/static/js/templates/register.html',
        controller: 'authController'
      })
      .when('/feed', {
        templateUrl: '/static/js/templates/vacancy-list.html',
        controller: 'feedController'                
      })
      .when('/', {
        templateUrl: '/static/js/templates/home.html',
      }) 
      .otherwise({
        redirectTo:'/'
      })
  }]);