import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('index', { path: '/' });
  this.resource('item', { path: '/item/:item_id'});
  this.route('user', { path: '/user/:user_id' });
  this.route('signup', { path: '/signup' });
  this.route('login');
});

export default Router;
