import angular from 'angular';
import Container from './components/container/container.component';
import Counter from './components/counter/counter.component';

export const appModule = angular.module('CounterApp', [])
  .component('container', Container)
  .component('counter', Counter);
