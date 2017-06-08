/**
 * Created by michael on 2017/5/26.
 */
import 'angular-ui-grid/ui-grid.css';

import angular from 'angular';
import uiGrid from 'angular-ui-grid';

import htmltpl from './user.tpl.html';

import UserCtrl from './user.ctrl';


function routing($stateProvider) {
  $stateProvider.state('app.user', {
    url: '/user',
    controller: 'UserCtrl',
    controllerAs: 'ctrl',
    template: htmltpl,
  });
}


export default angular.module('app.user', ['ui.grid', 'ui.grid.pagination'])
    .config(routing)
    .controller('UserCtrl', UserCtrl)
    .name;
