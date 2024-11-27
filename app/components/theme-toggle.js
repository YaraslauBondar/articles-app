import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ThemeToggleComponent extends Component {
  @tracked isDarkTheme = localStorage.getItem('theme') === 'dark';

  constructor() {
    super(...arguments);
    this.loadTheme();
  }

  loadTheme() {
    if (this.isDarkTheme) {
      document.documentElement.classList.add('dark');
    }
  }

  @action
  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;

    localStorage.setItem('theme', this.isDarkTheme ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', this.isDarkTheme);
  }
}
