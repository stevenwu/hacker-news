import Ember from 'ember';

export default Ember.Controller.extend({
  firebase: new Firebase('https://ember-hacker-news.firebaseio.com'),

  actions: {
    signUp: function() {
      var _this = this;
      this.get('firebase').createUser({
        email: this.get('email'),
        password: this.get('password')
      }, function(error) {
        if (error === null) {
          console.log('User created succesfully.');
          _this.transitionToRoute('login');
        } else {
          console.log('Error creating user:' + error);
        }
      });
   }
  }
});
