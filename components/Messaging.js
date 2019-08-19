import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MessagingStyle from '../components/styles/MessagingStyle';
import HeaderMessage from '../components/HeaderMessage';
import Messages from '../components/Messages';
import Controls from '../components/Controls';

class Messaging extends Component {
  render() {
    const { user } = this.props;
    return (
      <MessagingStyle>
        {user && <HeaderMessage user={user} />}
        <Messages />
        <Controls />
      </MessagingStyle>
    );
  }
}

Messaging.defaultProps = {
  user: {}
};

Messaging.propTypes = {
  user: PropTypes.object // eslint-disable-line react/forbid-prop-types
};

export default Messaging;
