import React, { Component } from 'react';
import axios from 'axios';
// import logo from './logo.svg';
import './App.css';
// import { Tweet } from 'react-twitter-widgets'

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
        <div className="quote-container">
        <div id="quote-box">
          <p id="text">{this.state.quote}</p>
          <p id="author">{this.state.author}</p>
        </div>

        <div className="links">
          <button id="new-quote" onClick={this.handleSubmit}>
            New Quote
          </button><br />
          <a id="tweet-quote" className="twitter-share-button" href={`https://twitter.com/intent/tweet?text=` + this.state.quote}><button>
            Tweet
          </button></a>
          <a href={`https://www.tumblr.com/widgets/share/tool?content=${this.state.quote}&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`}><button>
            Tumblr
          </button></a>
        </div>
        </div>

        <div className='yona'>webpage by yona</div>
      </div>
    );
  }
}

export default App;

// https://twitter.com/intent/tweet?text=Hello%20World
// https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=Socrates&content=An%20unexamined%20life%20is%20not%20worth%20living.&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button