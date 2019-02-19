import React, { Component } from 'react';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="min-h-screen bg-black flex">
        <div className="container mx-auto ">
          <h1 className="text-white text-center py-16">Tic Tac Toe</h1>
        </div>
      </div>
    );
  }
}

export default App;
