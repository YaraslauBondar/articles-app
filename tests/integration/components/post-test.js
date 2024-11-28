import { module, test } from 'qunit';
import { setupRenderingTest } from 'articles-app/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | post', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders information about a post property', async function (assert) {
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

    await render(hbs`<Post @post={{this.post}} />`);

    assert.dom('article').hasClass('post');
    assert.dom('article h2').hasText('test title');
    assert.dom('article h2 a').hasAttribute('href', '/posts/1');
    assert.dom('article .info').includesText('test author');
    assert.dom('article .content').includesText('test content');
  });
});
