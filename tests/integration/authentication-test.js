import Ember from 'ember';
import startApp from '../helpers/start-app';

var App;

var AUTHORIZED_USER = {
  email: 'wusteven@gmail.com',
  password: 'password'
};

module('Integration - Authentication', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('can log in', function() {
  visit('/login');
  fillIn('input.email', AUTHORIZED_USER.email);
  fillIn('input.password', AUTHORIZED_USER.password);
  click('button.submit');

  andThen(function() {
    equal(currentURL(), '/');
  });
});
