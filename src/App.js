import React, { Component } from 'react';
import axios from 'axios';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: '...loading',
      author: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  randomQuote() {
    axios.get('https://talaikis.com/api/quotes/random/')
    .then(res => {
      console.log(res.data);
      this.setState({
        quote: res.data.quote,
        author: res.data.author,
      })
    }).catch(error => {console.log(error)});
  }

  componentDidMount() {
    this.randomQuote();
  }

  handleSubmit() {
    console.log('button is clicked, yay');
    this.randomQuote();
  }

  render() {
    return (
      <div className="App">
        <div>
          <p>{this.state.quote}</p>
          <p>{this.state.author}</p>
        </div>
        <button>Tweet</button>
        <button>Tumblr</button>
        <button onClick={this.handleSubmit}>new quote</button>
      </div>
    );
  }
}

export default App;
