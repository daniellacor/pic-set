import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('lightbox');
  this.route('account');
  this.route('intro');
  this.route('lessons');
});

export default Router;