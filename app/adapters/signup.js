import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  firebase: new Firebase('https://ember-hacker-news.firebaseio.com')
});
