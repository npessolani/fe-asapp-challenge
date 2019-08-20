import React from 'react';
import io from 'socket.io-client';
import PropTypes from 'prop-types';
import MessagingStyle from '../components/styles/MessagingStyle';
import HeaderMessage from '../components/HeaderMessage';
import Messages from '../components/Messages';
import Controls from '../components/Controls';

class Messaging extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      messages: []
    };
    this.handleMessage = this.handleMessage.bind(this);
    this.handleChangeFinal = this.handleChangeFinal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.socket = io('http://localhost:3000');
    this.socket.on('message', this.handleMessage);
  }

  componentWillUnmount() {
    this.socket.off('message', this.handleMessage);
    this.socket.close();
  }

  handleMessage = message => {
    this.setState(state => ({ messages: state.messages.concat(message) }));
  };

  handleChangeFinal = value => {
    this.setState({ message: value });
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

    this.setState(state => ({
      message: '',
      messages: state.messages.concat(message)
    }));
  };

  render() {
    const { user } = this.props;
    return (
      <MessagingStyle>
        {user && <HeaderMessage user={user} />}
        <Messages user={user} messages={this.state.messages} />
        <Controls
          handleSubmit={this.handleSubmit}
          handleChangeFinal={value => this.handleChangeFinal(value)}
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
