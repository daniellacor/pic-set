import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    nextFlashcard(){
      // this.modelFor(lesson.id)
      this.flashcardNext()
    }
  }
});
