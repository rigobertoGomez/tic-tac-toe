import React from 'react';

const Square = (props) => {
  return (
    <div className="square p-1 " style={{ width: props.dimension, height: props.dimension }}>
      <div
        className={`content-square w-full h-full hover:shadow-md cursor-pointer flex items-center justify-center 
            ${props.value === 'X' ? 'bg-green' : (props.value === '0' ? 'bg-red' : 'bg-grey-light')}
          `}
        onClick={e => { props.onClick(e, props.row, props.cell) }}
      >
        <span className="font-black text-5xl text-white">
          {props.value}
        </span>
      </div>
    </div>
  );
}

export default Square
