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
    isADraw: false,
    stepCounter: 0
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
      squareDimension: (100 / this.state.sizeBoard) + '%',
      stepCounter: 0,
      isADraw: false
    })
  }
  handleClick = (e, row, cell) => {
    e.preventDefault();
    let { squares } = this.state
    const isComplete = squares[row][cell] !== "" ? true : false;
    if (isComplete) {
      return;
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
          xIsCurrent: !this.state.xIsCurrent,
          stepCounter: this.state.stepCounter + 1
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
    if (this.checkDiagonalLeft()) {
      return true;
    }
    if (this.checkDiagonalRight()) {
      return true;
    }
    if (this.state.stepCounter === (this.state.sizeBoard * this.state.sizeBoard) - 1) {
      this.setState({ isADraw: true })
      return true;
    }
  }
  checkRows = () => {
    let currentPlayer = this.state.xIsCurrent ? 'X' : '0'
    for (var row = 0; row < this.state.squares.length; row++) {
      var count = 0;
      for (var col = 0; col < this.state.squares.length; col++) {
        this.state.squares[row][col] === currentPlayer ? count++ : count = 0;
        if (count === this.state.sizeBoard) {
          console.log("win on row: " + row);
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
        this.state.squares[row][col] === currentPlayer ? count++ : count = 0;
        if (count === this.state.sizeBoard) {
          console.log("win on column " + col);
          return true;
        }
      }
    }
  }
  checkDiagonalLeft = () => {
    let count = 0;
    const length = this.state.squares.length;
    let currentPlayer = this.state.xIsCurrent ? 'X' : '0'
    for (var row = 0, col = 0; row < length && col < length; row++ , col++) {
      this.state.squares[row][col] === currentPlayer ? count++ : count = 0;
      if (count === this.state.sizeBoard) {
        console.log("win diagonal left - right");
        return true;
      }
    }
  }
  checkDiagonalRight = () => {
    let count = 0;
    const length = this.state.squares.length;
    let currentPlayer = this.state.xIsCurrent ? 'X' : '0'
    for (var row = 0, col = (length - 1); row < length && col >= 0; row++ , col--) {
      this.state.squares[row][col] === currentPlayer ? count++ : count = 0;
      if (count === this.state.sizeBoard) {
        console.log("win diagonal right - left");
        return true;
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
    let size = parseInt(e.target.value)        
    if(e.target.value === ""){     
      size = ""
    }
    this.setState({
      [e.target.name]: size
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
          <SelectBoard sizeBoard={this.state.sizeBoard} onChangeForm={this.onChangeForm} startGame={this.startGame} />
        </div>
        <div className="w-full text-center flex flex-col justify-center">
          {
            this.state.squares.length > 0 &&
            <div>
              <Status isFinished={this.state.isFinished} xIsCurrent={this.state.xIsCurrent} />
              <div className="container mx-auto ">
                <Board board={this.state.squares} isADraw={this.state.isADraw} squareDimension={this.state.squareDimension} onClick={this.handleClick} isFinished={this.state.isFinished} xIsCurrent={this.state.xIsCurrent} />
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
