import React from 'react';
import noodle from '../images/noodle.png';
import sad from '../images/sad.png';

const Message = props => {
  return (
    <div
      className={
        'message ' + (props.message.user === 'user-1' ? '' : 'received')
      }
    >
      <div className="avatar">
        {props.message.user === 'user-1' ? (
          <img src={noodle}></img>
        ) : (
          <img src={sad}></img>
        )}
      </div>
      <div className="text">
        <p>{props.message.text}</p>
      </div>
      <div className="time">
        <p>{props.message.timestamp}</p>
      </div>
    </div>
  );
};

export default Message;
