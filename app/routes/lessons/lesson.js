import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service('session-account'),
  model(params) {
    return Ember.RSVP.hash({
      lesson: this.store.findRecord('lesson', params.lesson_id),
      flashcards: this.store.findRecord('flashcard', 1),
      // flashcards: this.store.query('flashcard', {filter: {lessonId: this.get(params.lesson_id)}}).then(response){
      //   return response
      // },
      score: this.store.createRecord('score')
    //   score: this.store.query('score', {filter: {userId: this.get('session.account.data.id')}}).then(function(response){
    //     if (response.content.length == 0) {
    //       return that.store.createRecord('score')
    //     } else {
    //       response.query( 'score', {filter: {lessonId: params.lesson_id}}).then(function(response){
    //         if (response.content.length == 0) {
    //           return that.store.createRecord('score')
    //         } else {
    //           return response
    //         }
    //       })
    //     }
    //     console.log(response)
    //   })
    })
  }
});
