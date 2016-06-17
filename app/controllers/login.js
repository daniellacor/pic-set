import Ember from 'ember';

export default Ember.Controller.extend({
 session: Ember.inject.service(),
 actions: {
   authenticate: function(credentials) {
     var credentials = credentials,
       authenticator = 'authenticator:jwt'
     this.get('session').authenticate(authenticator, credentials).catch((reason)=>{
       this.set('errorMessage', reason.responseJSON.errors || reason);
     }).then(()=>{
      debugger
     });
   }
 }
});

// import Ember from 'ember';

// export default Ember.controller.extend({
//   session: Ember.inject.service('session')

//   actions: {
//     authenticate() {
//       let { email, password } = this.getProperties('email', 'password');
//       this.get('session').authenticate('authenticator:jwt', email, password).catch((reason)=> {
//         this.set('errorMessage', reason.error || reason);
//         })
//       }
//     }
//   }
// })