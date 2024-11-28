import { module, test } from 'qunit';
import { setupRenderingTest } from 'articles-app/tests/helpers';
import { render, fillIn } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | posts', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.setProperties({
      posts: [
        {
          id: '1',
          type: 'post',
          title: 'test title 1',
          content: 'test content 1',
          category: 'test category 1',
          author: 'test author 1',
          publishedAt: '2024-01-10',
        },
        {
          id: '2',
          type: 'post',
          title: 'test title 2',
          content: 'test content 2',
          category: 'test category 2',
          author: 'test author 2',
          publishedAt: '2024-01-10',
        },
        {
          id: '3',
          type: 'post',
          title: 'test title 3',
          content: 'test content 3',
          category: 'test category 3',
          author: 'test author 3',
          publishedAt: '2024-01-10',
        },
      ],
    });
  });

  test('it renders all given post properties by default', async function (assert) {
    await render(hbs`<Posts @posts={{this.posts}} />`);

    assert.dom('.posts').exists();
    assert.dom('.posts input').exists();

    assert.dom('.results').exists();
    assert.dom('.results .post').exists({ count: 3 });

    assert.dom('.results .post:nth-of-type(1)').containsText('test title 1');
    assert.dom('.results .post:nth-of-type(2)').containsText('test title 2');
    assert.dom('.results .post:nth-of-type(3)').containsText('test title 3');
  });

  test('it updates the results according to the search query', async function (assert) {
    await render(hbs`<Posts @posts={{this.posts}} />`);

    assert.dom('.posts').exists();
    assert.dom('.posts input').exists();

    await fillIn('.posts input', '1');

    assert.dom('.results').exists();
    assert.dom('.results .post').exists({ count: 1 });
    assert.dom('.results .post').containsText('test title 1');
  });
});
