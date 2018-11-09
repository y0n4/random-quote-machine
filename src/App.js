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
        quote: `"${res.data.quote}"`,
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
        <button onClick={this.handleSubmit}>new quote</button><br />
        <a href={`https://twitter.com/intent/tweet?text=` + this.state.quote}><button>Tweet</button></a>
        <a href="google.com"><button>Tumblr</button></a>
      </div>
    );
  }
}

export default App;

// https://twitter.com/intent/tweet?text=Hello%20World
// https://www.tumblr.com/widgets/share/tool?content=Two%20roads%20diverged%20in%20a%20wood%2C%20and%20I%E2%80%94I%20took%20the%20one%20less%20traveled%20by%2C%20And%20that%20has%20made%20all%20the%20difference.&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button