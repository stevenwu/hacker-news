import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var authToken,
        uid,
        self = this,
        sessionData = sessionStorage['firebase:session::ember-hacker-news'];

    if (sessionData) {
      authToken = JSON.parse(sessionData)['token'];
      uid = JSON.parse(sessionData)['uid'];

      return this.store.find('account', uid).then(function(user) {
        return user.get('favorites').map(function(id) {
          return self.store.find('item', id);
        });
      });
    } else {
      return Ember.A();
    }
  }
});
