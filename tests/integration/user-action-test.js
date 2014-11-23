import Ember from 'ember';
import startApp from '../helpers/start-app';

var App;


module('Integration - User Actions', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});
