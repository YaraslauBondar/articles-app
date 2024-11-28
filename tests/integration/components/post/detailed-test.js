import { module, test } from 'qunit';
import { setupRenderingTest } from 'articles-app/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | post/detailed', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.setProperties({
      post: {
        id: '1',
        type: 'post',
        title: 'test title',
        content: 'test content',
        category: 'test category',
        author: 'test author',
        publishedAt: '2024-01-10',
      },
    });
  });

  test('it renders detailed information about a post', async function (assert) {
    await render(hbs`<Post::Detailed @post={{this.post}} />`);

    assert.dom('article').hasClass('article');
    assert.dom('article .title').containsText('test title');
    assert.dom('article .info').containsText('test author');
    assert.dom('article .content').containsText('test content');
    assert.dom('article .back').exists();
    assert.dom('article .share').exists();
  });
});
