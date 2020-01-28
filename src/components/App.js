import React from 'react';
import '../scss/App.scss';
import { Button, Container } from '@material-ui/core';
import MessagesContainer from './MessagesContainer';
import { debounce } from 'lodash';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      currentMessage: '',
      userId: 'user-1',
      typing: false
    };

    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTyping = this.handleTyping.bind(this);
  }

  handleChange(e) {
    this.setState({ currentMessage: e.target.value, typing: true });
  }

  handleSubmit(e) {
    e.preventDefault();
    const message = this.state.currentMessage;

    const newMessage = {
      message,
      sender: this.state.userId,
      timestamp: new Date().getTime()
    };

    this.setState({
      messages: [newMessage, ...this.state.messages],
      currentMessage: ''
    });

    // Scroll to the bottom
    const messagesContainer = document.querySelector('.messages-container');
    messagesContainer.scrollTo(0, messagesContainer.scrollHeight);
  }

  handleUserChange(e) {
    const userId = e.currentTarget.dataset.userId;
    this.setState({ userId });
    // or this.setState({userId: userId})
  }

  handleTyping = debounce(() => {
    this.setState({ typing: false });
  }, 500);

  render() {
    this.timeout = null;
    console.log(this.state.typing);
    return (
      <div id="app">
        <Container disableGutters id="container" maxWidth="sm" p={0}>
          <MessagesContainer
            typing={this.state.typing}
            messages={this.state.messages}
            userId={this.state.userId}
          ></MessagesContainer>
          <div className="form-container">
            <div className="form">
              <form autoComplete="off" onSubmit={this.handleSubmit}>
                <label>
                  <input
                    type="text"
                    name="name"
                    className="message-input"
                    value={this.state.currentMessage}
                    onChange={this.handleChange}
                    onKeyUp={this.handleTyping}
                  />
                </label>
                <Button
                  type="submit"
                  label="Submit"
                  variant="outlined"
                  color="primary"
                >
                  SEND
                </Button>
              </form>
            </div>
            <div className="actions">
              <Button
                className={
                  this.state.userId === 'user-1' ? 'speaker active' : 'speaker'
                }
                variant="outlined"
                color="primary"
                onClick={this.handleUserChange}
                data-user-id="user-1"
              >
                ME
              </Button>
              <Button
                variant="outlined"
                color="primary"
                onClick={this.handleUserChange}
                data-user-id="user-2"
                className={
                  this.state.userId === 'user-2' ? 'speaker active' : 'speaker'
                }
              >
                MY IMAGINARY FRIEND
              </Button>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default App;
