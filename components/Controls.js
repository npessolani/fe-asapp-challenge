import React, { Component } from 'react';
import ControlsStyle from '../components/styles/ControlsStyle';

class Controls extends Component {
  constructor(props) {
    super(props);
    this.myTextarea = React.createRef();
  }
  render() {
    if (this.props.clean) {
      this.myTextarea.current.value = "";
    }
    return (
      <ControlsStyle>
        <div className="controlsContainer">
          <div className="textareaContainer">
            <textarea
              className="textareaControls"
              onChange={this.props.handleChange}
              placeholder={`Write a message`}
              rows={1}
              cols={8}
              maxLength={1000}
              ref={this.myTextarea}
            />
          </div>
          <button
            disabled={this.props.btnDisabled}
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

export default Controls;
