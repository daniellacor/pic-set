import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('lightbox');
  this.route('account');
  this.route('intro');
  this.route('flashcards', function() {
    this.route('flashcard', {path: ':flashcard_id'})
  })
  this.route('lessons', function() {
    this.route('lesson', { path: ':lesson_id' })
  });
  this.route('user', { path: '/user/:user_id' });
  this.route('score');
  this.route('login');
  this.route('signup');
});

export default Router;
