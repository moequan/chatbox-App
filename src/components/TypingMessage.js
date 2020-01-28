import React from 'react';
import noodle from '../images/noodle.png';
import sad from '../images/sad.png';

const TypingMessage = props => {
  return (
    <div
      className={
        props.userId === 'user-2' ? 'message sent' : 'message received'
      }
    >
      <div className="avatar">
        <img src={props.userId === 'user-1' ? sad : noodle}></img>
      </div>
      <div className="text">
        <p>...</p>
      </div>
    </div>
  );
};

export default TypingMessage;
