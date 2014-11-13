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
  deleted: DS.attr(),
  dead: DS.attr(),
  parts: DS.attr(),

  shortUrl: function() {
    var pattern = new RegExp('(?:http|https)://(?:www\.)?((?:[a-z1-9]+\.){1,2}(?:[a-z]{2,10}))/', 'i');
    return this.get('url').match(pattern)[1];
  }.property('url')
});
