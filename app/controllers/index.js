import Ember from 'ember';
import AccountAdapter from '../adapters/account';

export default Ember.ArrayController.extend({
  firebase: AccountAdapter,

  actions: {
    pinStory: function() {
      var account = this.store.createRecord('account', {
        email: null,
        following: null,
        favorites: null,
        pins: null
      });
      account.setProperties({
        email: 'admin@example.com',
        pins: [8602936]
      });
      account.save();
    }
  }
});
