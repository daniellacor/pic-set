import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      lesson: this.store.findRecord('lesson', params.lesson_id),
      flashcards: this.store.findRecord('flashcard', params.lesson_id),
      score: this.store.createRecord('score')
    })
  }
});
