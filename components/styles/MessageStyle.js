import styled from 'styled-components';

const MessageStyle = styled.div`
  margin-top: 8px;
  overflow: hidden;
  display: flex;
  padding: 0 32px;
  &.sender {
    justify-content: flex-end;
  }
  .message {
    position: relative;
    display: flex;
    flex-direction: column;
    margin-bottom: 5px;
    &-receiver {
      margin-left: -10px;
      align-items: end;
    }
    &-sender {
      align-items: flex-end;
      float: right;
      margin: 0;
      border-radius: 0.7em 0.7em 0;
    }
    .message-container {
      font-size: 14px;
      background: #e1edff;
      border: 0;
      max-width: 400px;
      padding: 0px 12px;
      line-height: 1.43;
      display: inline-block;
      color: #333;
      position: relative;
      &-receiver {
        font-size: 14px;
        border: 0;
        max-width: 400px;
        line-height: 1.43;
        display: inline-block;
        color: #333;
        position: relative;
        background: #f5f5f5;
        margin-left: 10px;
        border-radius: 0 0.7em 0.7em 0.7em;
        &::before {
          content: '';
          position: absolute;
          z-index: 1;
          top: 0;
          left: -10px;
          right: auto;
          border-right: 10px solid #f5f5f5;
          bottom: -10px;
          height: 10px;
        }
        &::after {
          content: '';
          position: absolute;
          z-index: 1;
          top: 2px;
          left: -10px;
          width: 10px;
          height: 10px;
          background: #fff;
          border-top-right-radius: 25px;
          bottom: -12px;
          right: -30px;
        }
      }
      &-sender {
        float: right;
        margin: 0;
        border-radius: 0.7em 0.7em 0;
        &::before {
          content: '';
          position: absolute;
          z-index: 0;
          bottom: -10px;
          right: 0;
          height: 10px;
          border-right: 10px solid #e1edff;
        }
        &::after {
          content: '';
          position: absolute;
          z-index: 1;
          bottom: -10px;
          right: 0px;
          width: 12px;
          height: 10px;
          background: #fff;
          border-top-right-radius: 25px;
        }
      }
    }
  }
  .message-text {
    display: block;
    line-height: 1.25;
    word-break: break-word;
    margin: 0;
    padding: 0;
    font-weight: 400;
  }
  .message-owner {
    display: flex;
    font-size: 12px;
    color: #ccc;
    padding: 3px 0 0 10px;
    justify-content: flex-start;
  }
`;

export default MessageStyle;
