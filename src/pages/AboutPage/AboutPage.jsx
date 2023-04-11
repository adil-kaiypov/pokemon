import { Component } from 'react';
import classes from './aboutPage.module.css';

class AboutPage extends Component {
  constructor(props) {
    super(props);
    this.state = { text: 'GeekTech' };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ text: 'Geeks' });
  }

  componentDidMount() {
    console.log('did mount');
  }

  render() {
    return (
      <div className={classes.aboutPage}>
        <h1>About Our Pokemon App</h1>
        <p>
          Welcome to our Pokemon app, where you can learn all about these fascinating creatures and sort them by generation. Whether you're a seasoned trainer or a curious newcomer, you'll find everything you need to know right here.
        </p>
        <button onClick={this.handleClick}>Click me!</button>
        <p>The current text is: {this.state.text}</p>
      </div>
    );
  }
}

export default AboutPage;
