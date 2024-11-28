import { helper } from '@ember/component/helper';

export default helper(function (params) {
  let value = params[0];
  if (value.toString().length > 100) {
    return value.toString().substring(0, 100) + '...';
  } else {
    return value;
  }
});
