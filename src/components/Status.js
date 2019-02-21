import React from 'react';

const Status = (props) => {
  return (
    <div className={`status-player text-center max-w-xs px-16 mx-auto mb-10 rounded transition ${props.xIsCurrent ? 'bg-green' : 'bg-red'}`}>
      {
        props.isFinished ?
          <h1 className="text-xl p-4 font-light text-white">FINISHED</h1>
          :
          <h1 className="text-xl p-4 font-light text-white flex items-center justify-center">
            player turn: <span className=" font-bold text-3xl ml-4">{props.xIsCurrent ? 'X' : '0'}</span>
          </h1>
      }
    </div>
  );
}

export default Status
