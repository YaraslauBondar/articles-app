import Helper from '@ember/component/helper';

export default class FormatDateHelper extends Helper {
  compute(date) {
    if (!date) {
      return '';
    }

    try {
      return new Intl.DateTimeFormat().format(new Date(date));
    } catch {
      return 'Некорректная дата';
    }
  }
}
