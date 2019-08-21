import styled from 'styled-components';

const MessagesStyle = styled.div`
  margin: 0 auto;
  max-height: calc(100vh - 200px);
  min-height: calc(100vh - 200px);
  overflow-y: auto;
  box-sizing: border-box;
  width: 100%;
  border: 1px solid ${props => props.theme.white};
  position: relative;
  .messsage-typing {
    position: absolute;
    bottom: 0;
    font-size: 12px;
    color: ${props => props.theme.gray};
    margin: 0 0 0 32px;
    font-style: italic;
  }
`;

export default MessagesStyle;
