'use strict'
// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'starter.controllers',  'ngCordova', 'chart.js'])

.run(function($ionicPlatform, $rootScope,   $cordovaPushV5, $location, $state) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

       cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });

    if (localStorage.getItem("loginCheck") === 'loggedin') {
      console.log('LOGIN WORKS!');
    } else {
      console.log('LOGIN DOES NOT WORK!');
    }

        /*
      localStorage.setItem("your_local_storage", 'true');
      console.log($rootScope.yourFunction);
      $rootScope.yourFunction =  localStorage.getItem("your_local_storage");
      console.log($rootScope.yourFunction);
        */

      if (  localStorage.getItem("your_local_storage") === 'true') {
          $rootScope.yourFunction = 'true' ;
      }
      //THIS IS HOW YOU DELETE THE FUNCTION:
    //    $rootScope.yourFunction = localStorage.setItem("your_local_storage", undefined);
       console.log($rootScope.yourFunction);

        //NOTE: THIS IS THE FUNCTION THAT ALLOWS THE CONTROLLER TO BLOCK ACCESS TO ROUTING:
       $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
              if (  localStorage.getItem("your_local_storage") === 'true') {
                 $rootScope.yourFunction = 'true' ;
                 console.log('LOGGED IN');
             } else {
                $location.path('/admin');
                console.log('NOT LOGGED IN');

              }

       });


})



.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('storeNames', {
            url: '/storeNames',
            templateUrl: 'templates/storeNames.html',
            controller: 'storeNamesCtrl'
        })
        .state('storelines', {
            url: '/storelines',
            templateUrl: 'templates/storelines.html',
            controller: 'StorelinesCtrl'
        })
        .state('peopleline', {
            url: '/peopleline',
            templateUrl: 'templates/peopleline.html',
            controller: 'PeoplelineCtrl'
        })
        .state('other', {
            url: '/other',
            templateUrl: 'templates/other.html',
            controller: 'ContactController'
        })
        .state('signup', {
            url: '/signup',
            templateUrl: 'templates/signup.html',
            controller: 'ContactController'
        })
        .state('profile', {
            url: '/profile',
            templateUrl: 'templates/profile.html',
            controller: 'ProfileCtrl'
        })

        .state('messaging', {
            url: '/messaging',
            templateUrl: 'templates/messaging.html',
            controller: 'MessagingCtrl'
        })

      .state('analytics', {
          url: '/analytics',
          templateUrl: 'templates/analytics.html',
          controller: 'AnalyticsCtrl'
      })

      .state('login', {
          url: '/login',
          templateUrl: 'templates/login.html',
          controller: 'LoginCtrl'
      })

      .state('details', {
          url: '/details',
          templateUrl: 'templates/details.html',
          controller: 'DetailsCtrl'
      })

      .state('admin', {
          url: '/admin',
          templateUrl: 'templates/admin.html',
          controller: 'AdminCtrl'
      })
          .state('chart', {
          url: '/chart',
          templateUrl: 'templates/chart.html',
          controller: 'ChartCtrl'
      })
          .state('input', {
          url: '/input',
          templateUrl: 'templates/input.html',
          controller: 'InputCtrl'
      })
          .state('dashboard', {
          url: '/dashboard',
          templateUrl: 'templates/dashboard.html',
          controller: 'DashboardCtrl'
      })
      .state('combined', {
      url: '/combined',
      templateUrl: 'templates/combined.html',
      controller: 'CombinedCtrl'
  })

        .state('home', {
            url: "/home",
            templateUrl: "templates/home.html",
            controller: "firstController"
        });
        
    $urlRouterProvider.otherwise('/dashboard');
});
