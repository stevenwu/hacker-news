import Ember from 'ember';

export default Ember.ObjectController.extend({
  recentActivity: function() {
    return this.get('submitted').slice(0,10);
  }.property('submitted.[]')
});
