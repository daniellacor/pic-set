import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      lesson: this.store.findRecord('lesson', params.lesson_id),
      flashcards: this.store.findAll('flashcard')
    })
  }
});
