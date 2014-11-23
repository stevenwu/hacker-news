import Ember from 'ember';

export default Ember.Controller.extend({
  hasSession: false,
  currentUser: function() {
    var sessionData = sessionStorage['firebase:session::ember-hacker-news'];
    if (sessionData) {
      var uid = JSON.parse(sessionData)['uid'];
      return this.store.find('account', uid);
    } else {
      return {};
    }
  }.property('hasSession')
});
