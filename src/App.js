import React, { Component } from 'react';
import './App.css';

class App extends Component {

constructor(){

	super();
	this.state={numero: 0}


}


  render() {
    return (
      <div>
        <span className="value">{this.state.numero}</span>
        <button id="inc" onClick={this.incrementa.bind(this)}>Incrementa</button>
      </div>
    );
  }


  incrementa(){

  	this.setState({

  		numero: (this.state.numero+1)
  	});

  }
}

export default App;
