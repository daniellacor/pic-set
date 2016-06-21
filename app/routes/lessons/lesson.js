import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service('session-account'),
  model(params) {
    return this.store.findRecord('lesson', params.lesson_id)
  }
});
