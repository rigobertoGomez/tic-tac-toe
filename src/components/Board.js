import React, { Component } from 'react';
import Square from './Square'

class Board extends Component {
  render() {    
    return (
      <div className="board-container  mx-auto flex flex-wrap shadow bg-white p-2" style={{height: '500px', width:'500px'}}>
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
