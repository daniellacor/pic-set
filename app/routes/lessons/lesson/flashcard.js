import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('flashcard', params.flashcard_id)
  },
  afterModel() {
    this.set('lesson', this.modelFor('lesson'))
  }
});
