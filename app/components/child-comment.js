import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: ['offset:col-md-offset-1'],
  offset: false,
  timestamp: function() {
    return moment.unix(this.get('comment.time')).fromNow();
  }.property('time')
});
