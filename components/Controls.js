import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ControlsStyle from '../components/styles/ControlsStyle';
import TextareaAutosize from 'react-textarea-autosize';

class Controls extends Component {
  render() {
    return (
      <ControlsStyle>
        <div className="controlsContainer">
          <div className="textareaContainer">
            <TextareaAutosize
              className="textareaControls"
              onChange={this.handleChange}
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
              placeholder={`Write a message`}
              minRows={1}
              maxRows={8}
              maxLength={1000}
            />
          </div>
          <button disabled className="buttonControls" onclick={this.sendMessage}>
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
