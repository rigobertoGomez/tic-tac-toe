import React, { Component } from 'react';

class Square extends Component {
  render() {
    return (
      <div className="square p-2 " style={{width: this.props.dimension, height: this.props.dimension}}>
        <div
          className={`content-square w-full h-full hover:shadow-md cursor-pointer flex items-center justify-center 
            ${this.props.value == 'X' ? 'bg-red' : (this.props.value == '0' ? 'bg-yellow' : 'bg-grey')}
          `}
          onClick={e => { this.props.onClick(e, this.props.row, this.props.cell) }}
        >
          <span
            className="font-black text-5xl text-white"
          >
            {this.props.value}
          </span>
        </div>
      </div>
    );
  }
}

export default Square;