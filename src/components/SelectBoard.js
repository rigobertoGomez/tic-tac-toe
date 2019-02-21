import React from 'react';

const Status = (props) => {
  return (
    <div >
      <span>Choose board size:</span>
      <div className="flex items-center mt-8 mb-4">
        <input
          className="py-2 px-4 bg-transparent border-black text-black border text-center text-3xl w-1/2" type="text" placeholder="3"
          value={props.sizeBoard}
          name="sizeBoard"
          onChange={e => { props.onChangeForm(e) }}
        />
        <span className="py-2 px-4 text-3xl mx-4">x</span>
        <p className="py-2 bg-transparent text-center text-3xl">{props.sizeBoard}</p>
      </div>
      <button className="bg-white p-2 shadow font-bold rounded py-3 px-4 hover:bg-grey-lighter"
        onClick={e => { props.startGame(e) }}
      >Start</button>
    </div>
  );
}

export default Status
