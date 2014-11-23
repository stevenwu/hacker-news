import Ember from 'ember';
import request from 'ic-ajax';
import DS from 'ember-data';

export default Ember.Route.extend({
  model: function() {
    var map = Ember.EnumerableUtils.map;
    var self = this;

    return DS.PromiseArray.create({
      promise: request('https://hacker-news.firebaseio.com/v0/topstories.json')
    }).then(function(ids) {
      return Ember.RSVP.all(map(ids, function(id) {
        return self.store.find('item', id);
      }));
    });
  }
});
