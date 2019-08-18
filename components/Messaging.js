import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MessagingStyle from '../components/styles/MessagingStyle';

class Messaging extends Component {
  render() {
    const { sender } = this.props;
    return <MessagingStyle>{sender}</MessagingStyle>;
  }
}

Messaging.defaultProps = {
  sender: 'Owner'
};

Messaging.propTypes = {
  sender: PropTypes.string.isRequired
};

export default Messaging;
