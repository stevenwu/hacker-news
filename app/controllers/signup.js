import Ember from 'ember';

export default Ember.Controller.extend({
  firebase: new Firebase('https://ember-hacker-news.firebaseio.com'),

  actions: {
    signUp: function() {
      this.get('firebase').createUser({
        email: this.get('email'),
        password: this.get('password')
      }, function(error) {
        if (error === null) {
          console.log('User created succesfully.');
          this.transitionTo('login');
        } else {
          console.log('Error creating user:' + error);
        }
      });
   }
  }
});
