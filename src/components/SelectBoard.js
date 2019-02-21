import React from 'react';

const Status = (props) => {
  return (
    <div >
      <span>Choose board size:</span>
      <div className="flex items-center mt-8 mb-4">
        <input
          className="py-2 px-4 bg-transparent border-black text-black border text-center text-3xl w-1/2" 
          placeholder="3"
          value={props.sizeBoard}
          type="number"
          
          name="sizeBoard"
          onChange={e => { props.onChangeForm(e) }}
        />
        <span className="py-2 px-4 text-3xl mx-4">x</span>
        <p className="py-2 px-4 h-12 w-12 rounded bg-yellow-dark text-center text-grey-darkest text-3xl">{props.sizeBoard}</p>
      </div>
      {props.sizeBoard >= 3 &&
      <button className="bg-white p-2 shadow font-bold rounded py-3 px-4 hover:bg-grey-lighter"
      onClick={e => { props.startGame(e) }}
    >Start</button>
      }
      
    </div>
  );
}

export default Status
