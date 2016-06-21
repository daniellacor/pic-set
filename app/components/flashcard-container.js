import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service('session-account'),
  actions: {
    submit(){
      let userAperture = $('input#slider-value-aperture.slider-value').val()
      let userShutter = $('input#slider-value-shutter.slider-value').val()
      let aperture = $('#trueAperture').val()
      let shutterSpeed = $('#trueShutterSpeed').val()
      let settings = {userAperture: userAperture, userShutter: userShutter, aperture: aperture, shutter: shutterSpeed};
      this.attrs.takePhotograph(settings);
      this.toggleProperty('isSnapped')
    },
    nextFlashcard() {
      this.toggleProperty('isSnapped')
      this.advanceFlashcard()
    }
  },
  isSnapped: false,
});
