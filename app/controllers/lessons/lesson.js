import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    judge(settings) {
      var points = 0
      var shutterDiff = settings.userShutter - settings.shutter
      switch(true) {
          case 0:
            points += 10;
            break;
          case ( shutterDiff < 2 && shutterDiff > -2 ):
            points += 8
            break;
          case ( shutterDiff < 4 && shutterDiff > -4 ):
            points += 6
            break;
          case ( shutterDiff < 6 && shutterDiff > -6 ):
            points += 4
            break;
          case ( shutterDiff < 8 && shutterDiff > -8 ):
            points += 2
            break;
          default:
            points += 0
      }
      var apertureDiff = settings.userAperture - settings.aperture
      switch(true) {
          case 0:
            points += 10;
            break;
          case ( apertureDiff < 2 && apertureDiff > -2 ):
            points += 8
            break;
          case ( apertureDiff < 4 && apertureDiff > -4 ):
            points += 6
            break;
          case ( apertureDiff < 6 && apertureDiff > -6 ):
            points += 4
            break;
          case ( apertureDiff < 8 && apertureDiff > -8 ):
            points += 2
            break;
          default:
            points += 0
      }
    },
    // score(points){
    //   session: Ember.inject.service('session-account'),
    //     var account = this.get('session.account.data')
    //     var user_id = account.id
    //     this.store.findRecord('user', user_id).then(function(score){
    //       user.set('score', points);
    //       user.save();
    //     }
    // }
  }
});
