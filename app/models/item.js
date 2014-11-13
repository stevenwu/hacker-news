import DS from 'ember-data';

function countChildren(node) {
}

export default DS.Model.extend({
  by: DS.attr(),
  time: DS.attr(),
  text: DS.attr(),
  kids: DS.hasMany('item', {async: true, inverse: 'parent'}),
  score: DS.attr(),
  title: DS.attr(),
  url: DS.attr(),
  parent: DS.belongsTo('item', {async: true, inverse: 'kids'}),
  deleted: DS.attr('boolean'),
  dead: DS.attr(),
  parts: DS.attr(),

  shortUrl: function() {
    // var pattern = new RegExp('(?:https|http)://(?:www\.)?((?:[a-z1-9-]+\.){1,2}(?:[a-z]{2,10}))/', 'i');
    var pattern = /((?:www\.){0,1}(?:[a-z0-9]+(?:-[a-z0-9]+)*\.)+[a-z]{2,})/
    if (this.get('url')) {
      var match = this.get('url').match(pattern);
      if (match) {
        return match[1];
      }
    }
  }.property('url'),

  timestamp: function() {
    return moment.unix(this.get('time')).fromNow();
  }.property('time')
});
