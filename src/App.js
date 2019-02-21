import React, { Component } from 'react';
import Board from './components/Board'
import Status from './components/Status'
import SelectBoard from './components/SelectBoard'
import { IconLogo } from './components/Icon';
import './App.scss';

class App extends Component {
  state = {
    sizeBoard: 3,
    formSize: 3,
    squares: [],
    squareDimension: 0,
    xIsCurrent: true,
    isFinished: false,

  }
  componentDidMount() {
    // this.generateBoard();
  }
  generateBoard = () => {
    let board = new Array(this.state.sizeBoard);
    for (var i = 0; i < board.length; i++) {
      board[i] = Array(this.state.sizeBoard).fill('');
    }
    this.setState({
      squares: board,
      xIsCurrent: true,
      isFinished: false,
      squareDimension: (100 / this.state.sizeBoard) + '%'
    })
  }
  handleClick = (e, row, cell) => {
    e.preventDefault();
    let { squares } = this.state
    const isComplete = squares[row][cell] !== "" ? true : false;
    if (isComplete) {
      return ;
    } else {
      squares[row][cell] = this.state.xIsCurrent ? 'X' : '0';
      this.setState({
        squares,
      })
      const isWinner = this.validateWinner();      
      if (isWinner) {
        this.setState({
          isFinished: true
        })
      } else {
        this.setState({
          xIsCurrent: !this.state.xIsCurrent
        })
      }
    }
  }
  validateWinner = () => {
    if (this.checkRows()) {
      return true;
    }
    if (this.checkCols()) {
      return true;
    }
  }
  checkRows = () => {
    let currentPlayer = this.state.xIsCurrent ? 'X' : '0'
    for (var row = 0; row < this.state.squares.length; row++) {
      var count = 0;
      for (var col = 0; col < this.state.squares.length; col++) {
        console.log(`squares[${row}][${col}]`);
        this.state.squares[row][col] === currentPlayer ? count++ : count = 0;
        if (count === this.state.sizeBoard) {
          console.log("checkRow true on row: " + row);
          return true;
        }
      }
    }
  }

  checkCols = () => {
    let currentPlayer = this.state.xIsCurrent ? 'X' : '0'
    for (var col = 0; col < this.state.squares.length; col++) {
      var count = 0;
      for (var row = 0; row < this.state.squares.length; row++) {
        console.log(`squares[${row}][${col}]`);
        this.state.squares[row][col] === currentPlayer ? count++ : count = 0;
        if (count === this.state.sizeBoard) {
          console.log("checkCol true on col " + col);
          return true;
        }
      }
    }
  }

  startGame = (e) => {
    e.preventDefault()
    this.generateBoard()
  }
  endGame = () => {
    this.setState({
      isFinished: true,
    })    
  }
  onChangeForm = (e) => {
    this.setState({
      [e.target.name]: parseInt(e.target.value)
    })
  }

  render() {
    return (
      <div className="min-h-screen flex ">
        <div className="header py-4 px-8 w-1/3 py-12 bg-yellow">
          <div className="flex items-center mb-16 ">
            <IconLogo width="40" height="40" />
            <h1 className="font-light text-black text-normal mx-4">Tic Tac Toe</h1>            
          </div>
          <SelectBoard sizeBoard={this.state.sizeBoard} onChangeForm={this.onChangeForm} startGame={this.startGame}/>          
        </div>
        <div className="w-full text-center flex flex-col justify-center">
          {
            this.state.squares.length > 0 &&
            <div>
              <Status isFinished={this.state.isFinished} xIsCurrent={this.state.xIsCurrent} />
              <div className="container mx-auto ">
                <Board board={this.state.squares} squareDimension={this.state.squareDimension} onClick={this.handleClick} isFinished={this.state.isFinished} xIsCurrent={this.state.xIsCurrent} />
                <div className="text-right max-w-md mx-auto">
                  <button className="rounded-full bg-yellow mt-2 text-black font-bold w-16 h-16 active:outline-none text-md shadow-lg hover:bg-yellow-dark"
                    onClick={this.generateBoard}
                  >Reset</button>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    );
  }
}

export default App;
