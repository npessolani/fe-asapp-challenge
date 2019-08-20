import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ControlsStyle from '../components/styles/ControlsStyle';
import TextareaAutosize from 'react-textarea-autosize';

class Controls extends Component {
  state = {
    message: '',
    btnDisabled: true
  };
  handleChange = e => {
    this.state.message = e.target.value.trim();
    this.setState({
      btnDisabled: this.state.message === ''
    });
    this.props.handleChangeFinal(this.state.message);
  };
  cleanTextarea = e => {
    console.log(e);
  };
  render() {
    return (
      <ControlsStyle>
        <div className="controlsContainer">
          <div className="textareaContainer">
            <TextareaAutosize
              className="textareaControls"
              onChange={this.handleChange}
              placeholder={`Write a message`}
              minRows={1}
              maxRows={8}
              maxLength={1000}
            />
          </div>
          <button
            disabled={this.state.btnDisabled}
            className="buttonControls"
            onClick={this.props.handleSubmit}
          >
            Send
          </button>
        </div>
      </ControlsStyle>
    );
  }
}

Controls.defaultProps = {};

Controls.propTypes = {};

export default Controls;
