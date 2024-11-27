import { setupTest } from 'articles-app/tests/helpers';
import { module, test } from 'qunit';

module('Unit | Model | post', function (hooks) {
  setupTest(hooks);

  test('it has the right info', function (assert) {
    const store = this.owner.lookup('service:store');
    let post = store.createRecord('post', {
      id: "1",
      type: "post",
      title: "Как использовать Ember.js для веб-разработки",
      content: "Ember.js",
      category: "Технологии",
      author: "Иван Иванов",
      publishedAt: "2024-01-10"
    });

    assert.ok(post);
    assert.strictEqual(post.title, 'Как использовать Ember.js для веб-разработки',);
    assert.strictEqual(post.content, 'Ember.js');
    assert.strictEqual(post.author, 'Иван Иванов');
    assert.strictEqual(post.category, 'Технологии');
    assert.strictEqual(post.publishedAt, '2024-01-10');
  });
});
