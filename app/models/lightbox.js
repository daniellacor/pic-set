import Model from 'ember-data/model';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  flashcards: belongsTo('flashcard'),
  users: belongsTo('user'),
});
