import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MessagesStyle from '../components/styles/MessagesStyle';
import Message from '../components/Message';

class Messages extends Component {
  render() {
    const { user, messages, sender } = this.props;
    return (
      <MessagesStyle>
        {messages.map((message, key) => (
          <Message message={message} user={user} key={key} />
        ))}
        {sender !== user.name && sender !== '' && (
          <span className="messsage-typing">{sender} is typing...</span>
        )}
      </MessagesStyle>
    );
  }
}

Messages.defaultProps = {
  user: {},
  messages: [],
  sender: ''
};

Messages.propTypes = {
  user: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  messages: PropTypes.array,
  sender: PropTypes.string
};

export default Messages;
