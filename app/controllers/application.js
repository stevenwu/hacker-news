import Ember from 'ember';

export default Ember.Controller.extend({
  setSession: function() {
    if (sessionStorage['firebase:session::ember-hacker-news']) {
      this.set('hasSession', true);
    }
  }.on('init'),
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
