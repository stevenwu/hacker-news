import Ember from 'ember';

export default Ember.Component.extend({
  needs: ['application'],
  hasSession: Ember.computed.alias('controllers.application.hasSession'),
  classNameBindings: ['offset:col-md-offset-1', 'collapse'],
  offset: false,
  collapse: false,
  timestamp: function() {
    return moment.unix(this.get('comment.time')).fromNow();
  }.property('time'),

  actions: {
    followUser: function(userId) {
      var sessionData = sessionStorage['firebase:session::ember-hacker-news'];
      var authToken = JSON.parse(sessionData)['token'];
      var uid = JSON.parse(sessionData)['uid'];
      console.log('Auth token: ' + authToken);
      console.log('uid: ' + uid);

      var followTarget = userId;

      this.store.find('account', uid).then(addFollowing);
      function addFollowing(user) {
        var newList = user.get('following').push(userId);
        user.save().then(null, function(error) {
          console.log(error);
        });
      }

      console.log('Following ' + userId);
    },

    saveComment: function(commentId) {
      var sessionData = sessionStorage['firebase:session::ember-hacker-news'];
      var authToken = JSON.parse(sessionData)['token'];
      var uid = JSON.parse(sessionData)['uid'];

      this.store.find('account', uid).then(function(o) {
        o.get('favorites').push(commentId);
        o.save().then(function(success) {
          console.log('Comment saved');
        }, function(error) {
          console.log('Error: Comment was not saved');
        });
      });
    },

    hide: function() {
      this.set('collapse', true);
    }
  }
});
