import React from 'react';
import noodle from '../images/noodle.png';
import sad from '../images/sad.png';
import TypingMessage from './TypingMessage';

const MessagesContainer = props => {
  const messages = props.messages;

  function makeTimePerfect(time) {
    const date = new Date(time);
    const hours = date.getHours();
    const minutes = '0' + date.getMinutes();
    const formattedTime = `${hours}:${minutes.substr(-2)}`;
    return formattedTime;
  }

  const messageItems = messages.map(el => {
    const beauTime = makeTimePerfect(el.timestamp);

    return (
      <div
        className={el.sender === 'user-2' ? 'message sent' : 'message received'}
        key={el.timestamp}
      >
        <div className="avatar">
          <img src={el.sender === 'user-1' ? sad : noodle}></img>
        </div>
        <div className="text">
          <p>{el.message}</p>
        </div>
        <div className="time">
          <p>{beauTime}</p>
        </div>
      </div>
    );
    // if (el.sender == 'user-1') {
    //   return (
    //     <div className="message sent">
    //       <div className="avatar">
    //         <img src={noodle}></img>
    //       </div>
    //       <div className="text">
    //         <p>{el.message}</p>
    //       </div>
    //       <div className="time">
    //         <p>{el.timestamp}</p>
    //       </div>
    //     </div>
    //   );
    // } else if (el.sender == 'user-2') {
    //   return (
    //     <div className="message received">
    //       <div className="avatar">
    //         <img src={sad}></img>
    //       </div>
    //       <div className="text">
    //         <p>{el.message}</p>
    //       </div>
    //       <div className="time">
    //         <p>{el.timestamp}</p>
    //       </div>
    //     </div>
    //   );
    // }
  });
  return (
    <div className="messages-container">
      {props.typing && <TypingMessage userId={props.userId}></TypingMessage>}
      {messageItems}
    </div>
  );
};

export default MessagesContainer;
