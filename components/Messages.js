import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MessagesStyle from '../components/styles/MessagesStyle';
import Message from '../components/Message';

class Messages extends Component {
  render() {
    const { user, messages } = this.props;
    return (
      <MessagesStyle>
        {this.props.messages.map((message, key) => (
          <Message message={message} user={this.props.user} key={key} />
        ))}
      </MessagesStyle>
    );
  }
}

Messages.defaultProps = {
  user: {},
  messages: []
};

Messages.propTypes = {
  user: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  messages: PropTypes.array
};

export default Messages;
