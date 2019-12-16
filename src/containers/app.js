import React, { Component } from 'react';
import Section from '../components/section';
import AddCommentForm from '../components/add-comment-form';
import CommentsList from '../components/comments-list';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      text: '',
      comments: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getUserpicUrl = this.getUserpicUrl.bind(this);
    this.addNewComment = this.addNewComment.bind(this);
    this.removeComment = this.removeComment.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.addNewComment();
    this.setState({
      name: '',
      text: ''
    });
  }

  updateLocalStorage() {
    if (typeof Storage !== 'undefined')
      localStorage.comments = JSON.stringify(this.state.comments);
  }

  getUserpicUrl() {
    let randomSeed =
      Math.random()
        .toString(36)
        .substring(2, 15) +
      Math.random()
        .toString(36)
        .substring(2, 15);
    const url = `https://avatars.dicebear.com/v2/human/${randomSeed}.svg?`;

    return url;
  }

  addNewComment() {
    let name = this.state.name;
    let text = this.state.text;
    let id = `f${(~~(Math.random() * 1e8)).toString(16)}`;

    const newComment = {
      id: id,
      name: name,
      userpic: this.getUserpicUrl(),
      time: new Date().toLocaleString(),
      text: text
    };

    const newCommentList = [...this.state.comments];
    newCommentList.push(newComment);

    this.setState(
      {
        comments: newCommentList
      },
      () => {
        this.updateLocalStorage();
      }
    );
  }

  removeComment(id) {
    const comments = [...this.state.comments];

    const newCommentList = comments.filter(comment => {
      if (comment.id !== id) return comment;
    });

    this.setState(
      {
        comments: newCommentList
      },
      () => {
        this.updateLocalStorage();
      }
    );
  }

  componentDidMount() {
    const localCommentsData =
      localStorage.comments && JSON.parse(localStorage.comments);
    this.setState({
      comments: localCommentsData || []
    });
  }

  render() {
    return (
      <main>
        <h1 hidden></h1>
        <Section title={'Новый комментарий:'}>
          <AddCommentForm
            onSubmit={this.handleSubmit}
            onChange={this.handleChange}
            nameValue={this.state.name}
            textValue={this.state.text}
          />
        </Section>
        <Section title={'Комментарии:'}>
          <CommentsList
            comments={this.state.comments}
            remove={this.removeComment}
          />
        </Section>
      </main>
    );
  }
}

export default App;
