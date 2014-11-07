import DS from 'ember-data';

export default DS.FirebaseAdapter.extend({
  firebase: new Firebase('https://hacker-news.firebaseio.com'),
  namespace: 'v0'
});
