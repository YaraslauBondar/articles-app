import Component from '@glimmer/component';

export default class PostsFilter extends Component {
  get results() {

    let { posts, query, category, author, date } = this.args;

    if (query) {
      posts = posts.filter((post) =>
        post.title.toLowerCase().includes(query.toLowerCase())
      || post.content.toLowerCase().includes(query.toLowerCase()));
    }

    if(category) {
      posts = posts.filter((post) => post.category === category);
    }

    if(author) {
      posts = posts.filter((post) => post.author === author);
    }

    if(date) {
      posts = posts.filter((post) => post.publishedAt === date);
    }

    return posts;
  }
}
