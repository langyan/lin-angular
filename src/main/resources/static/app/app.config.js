export function routing($urlRouterProvider, $stateProvider) {
  $urlRouterProvider.otherwise('/feature-a');

  $stateProvider
        .state('app', {
          abstract: true,
          template: '<div ui-view></div>',
        });
}

export function routingEventsLogger($rootScope) {
  const ROUTING_EVENTS = [
    '$stateChangeStart',
    '$stateChangeSuccess',
    '$stateChangeError',
  ];

  const VIEW_EVENTS = [
    '$viewContentLoading',
    '$viewContentLoaded',
  ];

  ROUTING_EVENTS.forEach((routingEvent) => {
    $rootScope.$on(routingEvent, (event, toState, toParams, fromState, fromParams, error) => {
      console.log(routingEvent, event, toState, toParams, fromState, fromParams);
    });
  });

  VIEW_EVENTS.forEach((viewEvent) => {
    $rootScope.$on(viewEvent, (event, viewConfig) => {
      console.log(viewEvent, event, viewConfig);
    });
  });
}
