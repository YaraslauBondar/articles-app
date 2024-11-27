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
          id: "1",
          type: "post",
          title: "Как использовать Ember.js для веб-разработки",
          content: "Ember.js — это мощный инструмент для создания современных веб-приложений ывап ывап ывапр цукенекукенекуке пав кеаукепаукепа укепаукепакукепр глоголонго ерпкепрпкеп укапаукаувавцывчы",
          category: "Технологии",
          author: "Иван Иванов",
          publishedAt: "2024-01-10"
        },
        {
          id: "2",
          type: "post",
          title: "Преимущества Tailwind CSS",
          content: "Tailwind CSS позволяет быстро создавать стилизованные интерфейсы ывап ывап ывапр цукенекукенекуке пав кеаукепаукепа укепаукепакукепр глоголонго ерпкепрпкеп укапаукаувавцывчы",
          category: "Технологии",
          author: "Анна Смирнова",
          publishedAt: "2024-02-15"
        },
        {
          id: "3",
          type: "post",
          title: "Последние достижения в области искусственного интеллекта",
          content: "Искусственный интеллект активно развивается, предлагая новые возможности  ывап ывап ывапр цукенекукенекуке пав кеаукепаукепа укепаукепакукепр глоголонго ерпкепрпкеп укапаукаувавцывчы",
          category: "Наука",
          author: "Сергей Петров",
          publishedAt: "2024-03-20"
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

    assert
      .dom('.results .post:nth-of-type(1)')
      .containsText('Как использовать Ember.js для веб-разработки');

    assert
      .dom('.results .post:nth-of-type(2)')
      .containsText('Преимущества Tailwind CSS');

    assert
      .dom('.results .post:nth-of-type(3)')
      .containsText('Последние достижения в области искусственного интеллекта');
  });

  test('it updates the results according to the search query', async function (assert) {
    await render(hbs`<Posts @posts={{this.posts}} />`);

    assert.dom('.posts').exists();
    assert.dom('.posts input').exists();

    await fillIn('.posts input', 'Как');

    assert.dom('.results').exists();
    assert.dom('.results .post').exists({ count: 1 });
    assert.dom('.results .post').containsText('Как использовать Ember.js для веб-разработки');
  });
});
