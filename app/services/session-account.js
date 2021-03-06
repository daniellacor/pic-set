import Ember from 'ember';

const { inject: { service }, RSVP } = Ember;

export default Ember.Service.extend({
 session: service('session'),

 loadCurrentUser() {
   return new RSVP.Promise((resolve, reject) => {
     let that = this
     const token = this.get('session.data.authenticated.token');
     if (!Ember.isEmpty(token)) {
      $.ajax({
        headers: {'Authorization': `Bearer ${token}`},
        url: 'http://localhost:3000/api/v1/users/current-user',
        method: 'GET', dataType: 'json',
        success: function(user){
           that.set('account', user);
           resolve()
        },
        failure: function(){
          reject()
        }})
     } else {
       resolve();
     }
   });
  }
});
