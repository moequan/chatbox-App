import React from 'react';
import { sendMessage, updateUser } from '../actions';
import { connect } from 'react-redux';

class FormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    let userId = event.target.dataset.user;
    this.props.updateUser(userId);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.sendMessage(this.state.value);
    this.setState({ value: '' });
  }

  render() {
    return (
      <div className="form-container">
        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              className="message-input"
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <div className="actions">
          <button
            className={this.props.currentUser === 'user-1' ? ' active' : ''}
            data-user="user-1"
            onClick={this.handleClick}
          >
            ME
          </button>
          <button
            data-user="user-2"
            onClick={this.handleClick}
            className={this.props.currentUser === 'user-2' ? ' active' : ''}
          >
            My imaginary friend
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { currentUser: state.currentUser };
};

export default connect(mapStateToProps, { sendMessage, updateUser })(
  FormContainer
);
