import Model from 'ember-data/model';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  flashcards: hasMany('flashcard'),
  user: belongsTo('user'),
});
