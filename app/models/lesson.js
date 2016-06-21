import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';

export default Model.extend({
  topic: attr('string'),
  description: attr('string'),
  flashcards: hasMany('flashcard', { async: true }),
  scores: hasMany('score', {async: true})
});
