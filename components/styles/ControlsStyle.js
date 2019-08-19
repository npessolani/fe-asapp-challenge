import styled from 'styled-components';

const ControlsStyle = styled.div`
  border-radius: 0 0 5px 5px;
  border-top: 1px solid ${props => props.theme.graySoft};
  padding: 1.5rem;
  width: 100%;
  display: flex;
  .controlsContainer {
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
    width: 100%;
    display: flex;
  }
  .textareaContainer {
    width: 75%;
    height: auto;
    border-radius: 4px;
    border: 1px solid ${props => props.theme.graySoft};
    background-color: ${props => props.theme.white};
    overflow: hidden;
  }
  .textareaControls {
    font-size: 14px;
    word-wrap: break-word;
    resize: none !important;
    border: none;
    width: 100%;
    padding: 1rem;
    display: block;
    &:focus {
      border-color: ${props => props.theme.blue};
      box-shadow: none;
      outline: none;
    }
    &::placeholder {
      color: ${props => props.theme.graySoft};
      opacity: 1;
      font-size: 14px;
    }
    &::-webkit-input-placeholder,
    &::-moz-placeholder,
    &:-ms-input-placeholder,
    &:-moz-placeholder {
      color: ${props => props.theme.graySoft};
      font-size: 14px;
    }
  }
  .buttonControls {
    width: 20%;
    border-radius: 4px;
    padding: 10px 24px;
    font-size: 14px;
    font-weight: 400;
    border-color: ${props => props.theme.blue};
    background-color: ${props => props.theme.blue};
    color: ${props => props.theme.white};
    cursor: pointer;
    &:disabled,
    &:disabled:hover {
      border-color: rgba(0, 0, 0, 0.04);
      background-color: rgba(0, 0, 0, 0.04);
      color: rgba(0, 0, 0, 0.25);
      cursor: default;
      background-clip: padding-box;
    }
    &:hover {
      border-color: ${props => props.theme.blueHard};
      background-color: ${props => props.theme.blueHard};
    }
  }
`;

export default ControlsStyle;
