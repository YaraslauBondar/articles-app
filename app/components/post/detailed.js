import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class DetailedComponent extends Component {
  @tracked showNotification = false;

  @action
  copyLink() {
    const articleUrl = window.location.href;

    navigator.clipboard.writeText(articleUrl).then(() => {
      this.showNotification = true;

      setTimeout(() => {
        this.showNotification = false;
      }, 3000);
    }).catch((err) => {
      console.error('Ошибка копирования ссылки:', err);
    });
  }
}
