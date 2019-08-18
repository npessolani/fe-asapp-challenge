import styled from 'styled-components';

const HeaderStyle = styled.div`
  display: flex;
  justify-content: center;
  font-size: 20px;
  font-style: italic;
  background-color: ${props => props.theme.gray};
  margin: 0;
  padding: 10px 0;
`;

export default HeaderStyle;
