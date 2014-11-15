import Ember from 'ember';

export default Ember.Controller.extend({
  firebase: new Firebase('https://ember-hacker-news.firebaseio.com'),

  actions: {
    login: function() {
      var _this = this;
      this.get('firebase').authWithPassword({
        email: this.get('email'),
        password: this.get('password')
      }, function(error, authData) {
        if (error === null) {
          console.log("User ID: " + authData.uid + ", Provider: " + authData.provider);
          _this.transitionTo('index');
        } else {
          console.log(error);
        }
      },{
        remember: 'sessionOnly'
      });
    }
  }
});
