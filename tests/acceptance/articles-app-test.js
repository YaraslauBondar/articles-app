import { module, test } from 'qunit';
import { click, visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'articles-app/tests/helpers';

module('Acceptance | articles app', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting /', async function (assert) {
    await visit('/');

    assert.strictEqual(currentURL(), '/');
    assert.dom('nav').exists();
    assert.dom('.to-home').hasText('Posts');
    assert.dom('.posts').exists();
    assert.dom('.post').exists();
  });

  test('viewing the details of a post', async function (assert) {
    await visit('/');
    assert.dom('.post').exists();

    await click('.post:first-of-type a');
    assert.strictEqual(currentURL(), '/posts/1');
  });

  test('visiting /posts/1', async function (assert) {
    await visit('/posts/1');

    assert.strictEqual(currentURL(), '/posts/1');
    assert.dom('nav').exists();
    assert.dom('.to-home').containsText('Posts');

    assert.dom('.detailed').exists();
    assert.dom('.share').hasText('Скопировать ссылку');

    await click('.share');
    navigator.clipboard
      .readText()
      .then((clipText) =>
        assert.strictEqual(clipText, `${window.location.origin}/posts/1`),
      );

    await click('.back');
    assert.strictEqual(currentURL(), '/');
  });

  test('navigating using the nav-bar', async function (assert) {
    await visit('/posts/1');

    await click('nav a.to-home');
    assert.strictEqual(currentURL(), '/');
  });
});
