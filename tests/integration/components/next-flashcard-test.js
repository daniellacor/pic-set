import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('next-flashcard', 'Integration | Component | next flashcard', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{next-flashcard}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#next-flashcard}}
      template block text
    {{/next-flashcard}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
