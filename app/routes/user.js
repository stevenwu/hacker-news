import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var _this = this;
    return this.store.find('user', params.user_id).then(function(obj) {
      var recent = obj.get('submitted').slice(0,10);

      return Ember.RSVP.hash({
        user: obj,
        submissions: recent.map(function(item) {
            return _this.store.find('item', item);
        })
      });
    });
  }
});
