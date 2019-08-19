import styled from 'styled-components';

const MessagesStyle = styled.div`
  margin: 0 auto;
  max-height: calc(100vh - 200px);
  min-height: calc(100vh - 200px);
  overflow-y: auto;
  box-sizing: border-box;
  width: 100%;
  border: 1px solid ${props => props.theme.white};
`;

export default MessagesStyle;
