import styled from 'styled-components';

const MesssagingStyle = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-height: calc(100vh - 200px);
  min-height: calc(100vh - 200px);
  border-radius: 5px;
  margin: 0 auto;
  overflow-y: auto;
  background: ${props => props.theme.white};
  border-radius: 5px 5px 0 0;
  border: 1px solid ${props => props.theme.white};
  box-sizing: border-box;
  margin: 1rem;
`;

export default MesssagingStyle;
