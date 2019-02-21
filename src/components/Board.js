import React, { Component } from 'react';
import Square from './Square'

class Board extends Component {
  render() {
    if (this.props.isFinished || this.props.isADraw) {
      return (
        <div
          className={`board-container transition mx-auto flex items-center justify-center shadow 
          ${this.props.xIsCurrent ? 'bg-green' : 'bg-red'} p-2`} style={{ height: '500px', width: '500px' }}
        >
          <div className="text-center">
            {
              this.props.isADraw ?
                <h1 className="text-5xl text-white">Is a Draw :(</h1>
                :
                <div>
                  <p className="text-xl text-white mb-4">Winner is:</p>
                  <h1 className="text-10xl text-white">{this.props.xIsCurrent ? 'X' : '0'}</h1>
                </div>
            }
          </div>
        </div>
      )
    }
    return (
      <div className="board-container  mx-auto flex flex-wrap shadow bg-white p-2" style={{ height: '500px', width: '500px' }}>
        {this.props.board.map((square, indexSquare) => {
          return (
            square.map((item, i) => {
              return (
                <Square
                  key={i}
                  row={indexSquare}
                  dimension={this.props.squareDimension}
                  cell={i}
                  value={item}
                  isFinished={this.props.isFinished}
                  onClick={this.props.onClick}
                />
              )
            })
          )
        })}
      </div>
    );
  }
}

export default Board;
