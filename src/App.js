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

  componentDidMount() {
    axios.get('https://talaikis.com/api/quotes/random/')
      .then(res => {
        console.log(res.data);
        this.setState({quote: res.data.quote})
      }).catch(error => {console.log(error)});
  }

  handleSubmit = () => {
    //when clicked, do an api call
    console.log('button is clicked, yay');
    axios.get('https://talaikis.com/api/quotes/random/')
    .then(res => {
      console.log(res.data);
      this.setState({quote: res.data.quote})
    }).catch(error => {console.log(error)});
  }

  render() {
    return (
      <div className="App">
        <div><p>{this.state.quote}</p></div>
        <button onClick={this.handleSubmit}>new quote</button>
      </div>
    );
  }
}

export default App;
