import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service('session'),
  actions: {
    submit(){
      let userAperture = $('input#slider-value-aperture.slider-value').val()
      let userShutter = $('input#slider-value-shutter.slider-value').val()
      let aperture = $('#trueAperture').val()
      let shutterSpeed = $('#trueShutterSpeed').val()
      let settings = {userAperture: userAperture, userShutter: userShutter, aperture: aperture, shutter: shutterSpeed};
      this.attrs.takePhotograph(settings);
    }
  }
});