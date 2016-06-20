import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service('session'),
  var session = this.get('session')
  return this.store.findRecord('score', 'session.userId')
});
