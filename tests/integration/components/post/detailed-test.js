import { module, test } from 'qunit';
import { setupRenderingTest } from 'articles-app/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | post/detailed', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.setProperties({
      post: {
        id: "1",
        type: "post",
        title: "Как использовать Ember.js для веб-разработки",
        content: "Ember.js — это мощный инструмент для создания современных веб-приложений ывап ывап ывапр цукенекукенекуке пав кеаукепаукепа укепаукепакукепр глоголонго ерпкепрпкеп укапаукаувавцывчы",
        category: "Технологии",
        author: "Иван Иванов",
        publishedAt: "2024-01-10"
      },
    });
  });

  test('it renders detailed information about a post', async function (assert) {
    await render(hbs`<Post::Detailed @post={{this.post}} />`);

    assert.dom('article').hasClass('article');
    assert.dom('article .title').containsText('Как использовать Ember.js для веб-разработки');
    assert.dom('article .info').containsText('Иван Иванов');
    assert.dom('article .content').containsText('Ember.js');
    assert.dom('article .back').exists();
    assert.dom('article .share').exists();
  });
});
