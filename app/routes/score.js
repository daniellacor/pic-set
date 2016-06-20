import Ember from 'ember';

export default Ember.Route.extend({
<<<<<<< HEAD

=======
  model() {
    return this.store.findRecord('score', 'session.userId')
  }
>>>>>>> b156946fcb9bae3ef8ceb54524b3ba9fa89bcebf
});
