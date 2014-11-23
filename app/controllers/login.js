import Ember from 'ember';

export default Ember.Controller.extend({
  firebase: new Firebase('https://ember-hacker-news.firebaseio.com'),
  needs: 'application',

  actions: {
    login: function() {
      var self = this;
      self.get('firebase').authWithPassword({
        email: self.get('email'),
        password: self.get('password')
      }, function(error, authData) {
        Ember.run(function() {

          if (error === null) {
            console.log("User ID: " + authData.uid + ", Provider: " + authData.provider);
            self.store.find('account', authData.uid).then(function(response) {
              console.log('Account found. Logging in...');
            }, function(error) {
              console.log('Account not found. Creating new account...');
              var newAccount = self.store.createRecord('account');
              newAccount.set('id', error.recordId);
              newAccount.set('email', self.get('email'));
              newAccount.save().then(null, function(error) { console.log(error); });
            });
            self.set('controllers.application.hasSession', true);
            self.transitionToRoute('index');
          } else {
            console.log(error);
          }
        });
      },{
        remember: 'sessionOnly'
      });
    }
  }
});
