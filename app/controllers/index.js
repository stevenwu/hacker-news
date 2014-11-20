import Ember from 'ember';
import AccountAdapter from '../adapters/account';

export default Ember.ArrayController.extend({
  needs: 'application',
  firebase: AccountAdapter,
  hasSession: Ember.computed.alias('controllers.application.hasSession'),

  actions: {
    pinStory: function(story) {
      this.get('controllers.application.currentUser').then(function(o) {
        o.get('pins').push(story.get('id'));
        o.save();
      });
    }
  }
});
