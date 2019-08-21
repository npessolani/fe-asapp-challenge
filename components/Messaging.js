import React, { Component } from 'react';
import io from 'socket.io-client';
import PropTypes from 'prop-types';
import MessagingStyle from '../components/styles/MessagingStyle';
import HeaderMessage from '../components/HeaderMessage';
import Messages from '../components/Messages';
import Controls from '../components/Controls';

class Messaging extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      messages: [],
      sender: '',
      clean: false,
      btnDisabled: true
    };
    this.handleMessage = this.handleMessage.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTyping = this.handleTyping.bind(this);
  }

  componentDidMount() {
    this.socket = io('http://localhost:3000');
    this.socket.on('message', this.handleMessage);
    this.socket.on('notifyTyping', this.handleTyping);
  }

  componentWillUnmount() {
    this.socket.off('message', this.handleMessage);
    this.socket.off('notifyTyping', this.handleTyping);
    this.socket.close();
  }

  handleMessage = message => {
    this.setState(state => ({ messages: state.messages.concat(message) }));
  };

  handleTyping = sender => {
    this.setState({
      sender: sender
    });
  };

  handleChange = e => {
    this.setState({
      message: e.target.value,
      btnDisabled: e.target.value === '',
      clean: false
    });
    this.socket.emit('notifyTyping', this.props.user.name);
  };

  handleSubmit = event => {
    event.preventDefault();

    const message = {
      name: this.props.user.name,
      avatar: this.props.user.avatar,
      text: this.state.message,
      date: new Date().toLocaleTimeString()
    };

    this.socket.emit('message', message);
    this.socket.emit('notifyTyping', '');

    this.setState(state => ({
      message: '',
      messages: state.messages.concat(message)
    }));
    this.setState({
      btnDisabled: true,
      clean: true
    });
  };

  render() {
    const { user } = this.props;
    return (
      <MessagingStyle>
        {user && <HeaderMessage user={user} />}
        <Messages
          user={user}
          messages={this.state.messages}
          sender={this.state.sender}
        />
        <Controls
          handleSubmit={this.handleSubmit}
          handleChange={e => this.handleChange(e)}
          btnDisabled={this.state.btnDisabled}
          clean={this.state.clean}
        />
      </MessagingStyle>
    );
  }
}

Messaging.defaultProps = {
  user: {},
  messages: []
};

Messaging.propTypes = {
  user: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  messages: PropTypes.array
};

export default Messaging;
