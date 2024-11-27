import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class Posts extends Component {
  @tracked query = '';
  @tracked category = '';
  @tracked author = '';
  @tracked date = '';

  @action
  updateQuery(event) {
    this.query = event.currentTarget.value;
  }

  @action
  updateCategory(event) {
    this.category = event.currentTarget.value;
  }

  @action
  updateAuthor(event) {
    this.author = event.currentTarget.value;
  }

  @action
  updateDate(event) {
    this.date = event.currentTarget.value.toString();
  }

  @action
  handleSubmit(event) {
    event.preventDefault();
    this.updateQuery(event);
  }
}
