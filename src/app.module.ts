import angular from 'angular';
import 'angular-sanitize';

import Container from './components/container/container.component';
import Counter from './components/counter/counter.component';

export const appModule = angular.module('CounterApp', ['ngSanitize'])
  .component('container', Container)
  .component('counter', Counter);
