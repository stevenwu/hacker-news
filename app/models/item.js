import DS from 'ember-data';

export default DS.Model.extend({
  by: DS.attr('string'),
  time: DS.attr(),
  text: DS.attr(),
  kids: DS.hasMany('item', {async: true, inverse: 'parent'}),
  score: DS.attr(),
  title: DS.attr(),
  url: DS.attr(),
  parent: DS.belongsTo('item', {async: true, inverse: 'kids'})
  // deleted: DS.attr()
});
