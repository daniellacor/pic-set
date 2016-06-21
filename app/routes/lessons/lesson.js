// import Ember from 'ember';
//
// export default Ember.Route.extend({
//   session: Ember.inject.service('session-account'),
//   model(params) {
//     return this.store.findRecord('lesson', params.lesson_id)
//   }
// });


import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service('session-account'),
  model(params) {
    var session_id = this.get('session.account.data.id')
    return Ember.RSVP.hash({
      lesson: this.store.findRecord('lesson', params.lesson_id),
      score: this.store.createRecord('score', {user: session_id, lesson: params.lesson_id, score: 0})
    });
  },

  setupController(controller, models) {
    controller.set('lesson', models.lesson);
    controller.set('score', models.score);
  }

});
