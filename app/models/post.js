import Model, { attr } from "@ember-data/model";

export default class PostModel extends Model {

  @attr title;
  @attr author;
  @attr category;
  @attr content;
  @attr("date") publishedAt;

}
