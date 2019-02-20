import React, { Component } from 'react';
import Board from './components/Board'
import { IconLogo } from './components/Icon';
import './App.scss';

class App extends Component {
  state = {
    sizeBoard: 3,
    squares: [],
    squareDimension: 0,
    xIsNext: true,
  }
  componentDidMount() {
    this.generateBoard();
  }
  generateBoard = () => {
    let board = new Array(this.state.sizeBoard);
    for (var i = 0; i < board.length; i++) {
      board[i] = Array(this.state.sizeBoard).fill('');
    }
    this.setState({
      squares: board,
      xIsNext: true,
      squareDimension: (100 / this.state.sizeBoard) + '%'
    })
  }
  handleClick = (e, row, cell) => {
    e.preventDefault();
    let { squares } = this.state
    const isComplete = squares[row][cell] !== "" ? true : false;
    if (isComplete) {
      return console.log("completo");
    } else {
      squares[row][cell] = this.state.xIsNext ? 'X' : '0';
      this.setState({
        squares,
        xIsNext: !this.state.xIsNext
      })
    }
  }
  render() {
    return (
      <div className="min-h-screen  ">
        <div className="header py-4 px-8 flex items-center">
          <IconLogo width="40" height="40" />
          <h1 className="font-light text-black text-normal mx-4">Tic Tac Toe</h1>
        </div>
        <div className={`status-player text-center max-w-xs mx-auto mb-10 rounded transition ${this.state.xIsNext ? 'bg-green' : 'bg-red'}`}>
          <h1 className="text-xl p-4 font-light text-white">player turn: <span className=" font-bold">{this.state.xIsNext ? 'X' : '0'} </span></h1>
        </div>
        <div className="container mx-auto ">
          <Board board={this.state.squares} squareDimension={this.state.squareDimension} onClick={this.handleClick} />
          <div className="text-right max-w-md mx-auto">
            <button className="rounded-full bg-yellow mt-2 text-black font-bold w-16 h-16 active:outline-none text-md shadow-lg hover:bg-yellow-dark"
              onClick={this.generateBoard}
            >Reset</button>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
