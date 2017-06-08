/**
 * Created by michael on 2017/5/27.
 */

import angular from 'angular';

import htmltpl from './feature-a.tpl.html';

export function routing($stateProvider) {
    $stateProvider
        .state('app.feature-a', {
            url: '/feature-a',
            controller: 'FeatureACtrl',
            controllerAs: 'ctrl',
            template: htmltpl,
        });
}

export default angular
    .module('app.feature-b', [])
    .config(routing)
    .directive('someComponent', someComponent)
    .name;