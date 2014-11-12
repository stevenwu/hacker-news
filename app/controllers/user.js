import Ember from 'ember';

export default Ember.ObjectController.extend({
  user: Ember.computed.alias('model.user'),
  submissions: Ember.computed.alias('model.submissions')
});
