import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('lightbox');
  this.route('account');
  this.route('intro');
  this.route('lessons', function() {
    this.route('lesson', {path: ':lesson_id'});
  });
  this.route('user');
  this.route('score');
  this.route('flashcard');
});

export default Router;
