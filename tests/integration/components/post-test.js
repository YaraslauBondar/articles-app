import { module, test } from 'qunit';
import { setupRenderingTest } from 'articles-app/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | post', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders information about a post property', async function (assert) {
    this.setProperties({
      post: {
        id: "1",
        type: "post",
        title: "Как использовать Ember.js для веб-разработки",
        content: "Ember.js — это мощный инструмент для создания современных веб-приложений ывап ывап ывапр цукенекукенекуке пав кеаукепаукепа укепаукепакукепр глоголонго ерпкепрпкеп укапаукаувавцывчы",
        category: "Технологии",
        author: "Иван Иванов",
        publishedAt: "2024-01-10"
      }
    });

    await render(hbs`<Post @post={{this.post}} />`);

    assert.dom('article').hasClass('post');
    assert.dom('article h2').hasText('Как использовать Ember.js для веб-разработки');
    assert
      .dom('article h2 a')
      .hasAttribute('href', '/posts/1');
    assert.dom('article .info').includesText('Иван Иванов');
    assert.dom('article .content').includesText('Ember.js');
  });
});
