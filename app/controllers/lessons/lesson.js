import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    judge(settings) {

    },
    score(points){
      session: Ember.inject.service('session-account'),
        var account = this.get('session.account.data')
        var user_id = account.id
        this.store.findRecord('user', user_id).then(function(score){
          user.set('score', points);
          user.save();
        }


    }
  }
});
