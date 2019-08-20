import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Avatar from '../components/Avatar';
import MessageStyle from '../components/styles/MessageStyle';

class Message extends Component {
  state = {
    sender: this.props.message.name !== this.props.user.name
  };
  render() {
    const { user, message } = this.props;
    return (
      <MessageStyle className={`${!this.state.sender ? 'sender' : 'receiver'}`}>
        {this.state.sender && <Avatar avatar={message.avatar} />}
        <div
          className={`message message-${
            !this.state.sender ? 'sender' : 'receiver'
          }`}
        >
          <div
            className={`message-container message-container-${
              !this.state.sender ? 'sender' : 'receiver'
            }`}
          >
            <div className="message-text">
              <p>{message.text}</p>
            </div>
          </div>
          <div className="message-owner">
            <span>
              {message.name} - {message.date}
            </span>
          </div>
        </div>
      </MessageStyle>
    );
  }
}

Message.defaultProps = {
  user: {},
  message: {}
};

Message.propTypes = {
  user: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  message: PropTypes.object // eslint-disable-line react/forbid-prop-types
};

export default Message;
