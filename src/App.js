import React, { Component } from 'react';
import Board from './components/Board'
import './App.scss';

class App extends Component {
  state = {
    sizeBoard: 4,    
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
    squares[row][cell] = this.state.xIsNext ? 'X' : '0';  
    this.setState({
      squares,
      xIsNext: !this.state.xIsNext
    })
  }
  render() {
    return (
      <div className="min-h-screen  ">
        <div className="game-header bg-grey-light ">
          <h1 className=" text-center py-8 font-light text-black">Tic Tac Toe</h1>
        </div>
        <div className="status-player text-center bg-yellow-light max-w-md mx-auto mb-16">
          <h1 className="text-xl p-4 font-light">next player is: <span className=" font-bold">{this.state.xIsNext ? 'X' : '0'} </span></h1>
        </div>
        <div className="container mx-auto ">
          <Board board={this.state.squares} squareDimension={this.state.squareDimension} onClick={this.handleClick} />
          <div className="text-right max-w-md mx-auto">
            <button className="rounded-full bg-blue-light text-white w-16 h-16 active:outline-none text-md shadow-lg hover:bg-blue-dark"
            onClick={this.generateBoard}
            >Reset</button>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
