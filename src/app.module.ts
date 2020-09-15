import angular from 'angular';
import Container from './components/container.component';
import Counter from './components/counter.component';

export const appModule = angular.module('CounterApp', [])
  .component('container', Container)
  .component('counter', Counter);
