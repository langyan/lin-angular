'use strict';


import angular from 'angular';
import angular-route from 'angular-route/angular-route';

import view1 from './view1/view1.js';
import view1 from './view2/view2.js';

// Declare app level module which depends on views, and components
var app=angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
export app;