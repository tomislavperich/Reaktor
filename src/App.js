import React, { Component } from 'react';
import './App.css';

const baseUrl = "http://192.168.0.14";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      playing: false,
      errorMessage: ''
    }
  }

  handleClick(){
    fetch(`${baseUrl}/?music_playing=${!this.state.playing}`).then(response => {
      if(response.status === 200){
        this.setState({playing: !this.state.playing})
      }else if(response.status >= 400){
        this.setState({errorMessage: "Error"})
      }
    });
  }
  renderError(){
    if(this.errorMessage){
      return <div>{this.state.errorMessage}</div>
    } else {
      return <div></div>
    }
  }
  render() {
    var errorMessage = this.renderError();
    return (
      <div className="App">
        <h1 className="App-title">Welcome to Reaktor Web application</h1>
        <button onClick={() => this.handleClick()}>{this.state.playing ? "Play":"Stop"}</button>
        {errorMessage}
      </div>
    );
  }
}

export default App;
