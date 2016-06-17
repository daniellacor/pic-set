import Ember from 'ember';

export default Ember.Controller.extend({
 session: Ember.inject.service('session'),

 actions: {
   save(user){
     user.save().then((user)=>{
       var credentials = {email: user.get('email'), password: user.get('password')},
         authenticator = 'authenticator:jwt';

       this.get('session').authenticate(authenticator, credentials).catch((reason)=>{
         this.set('errorMessage', reason.error || reason);
       });
     }).catch((adapterError) => {
       if (adapterError.errors) {
         this.set('errorMessage', adapterError.errors)
       }
     })
   }
 }
});


// let name = this.get('user.name')
// let email = this.get('user.email')
// let password = this.get('user.password')
// let passwordConfirmation = this.get('user.passwordConfirmation')
//
// var user = this.store.createRecord('user', {
//   name: name,
//   email: email,
//   password: password,
//   passwordConfirmation: passwordConfirmation
// });
// debugger
