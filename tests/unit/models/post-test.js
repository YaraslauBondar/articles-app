import { setupTest } from 'articles-app/tests/helpers';
import { module, test } from 'qunit';

module('Unit | Model | post', function (hooks) {
  setupTest(hooks);

  test('it has the right info', function (assert) {
    const store = this.owner.lookup('service:store');
    let post = store.createRecord('post', {
      id: '1',
      type: 'post',
      title: 'test title',
      content: 'test content',
      category: 'test category',
      author: 'test author',
      publishedAt: '2024-01-10',
    });

    assert.ok(post);
    assert.strictEqual(post.title, 'test title');
    assert.strictEqual(post.content, 'test content');
    assert.strictEqual(post.author, 'test author');
    assert.strictEqual(post.category, 'test category');
    assert.strictEqual(post.publishedAt, '2024-01-10');
  });
});
