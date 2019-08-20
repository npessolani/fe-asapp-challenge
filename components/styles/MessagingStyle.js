import styled from 'styled-components';

const MessagingStyle = styled.div`
  margin: 1rem;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: ${props => props.theme.graySoft};
  border-radius: 5px;
  width: 100%;
  position: relative;
  min-height: calc(100vh - 200px);
  box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.07), 0 1px 2px 0 rgba(0, 0, 0, 0.25);
  background-color: ${props => props.theme.white};
`;

export default MessagingStyle;
