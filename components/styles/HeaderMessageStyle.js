import styled from 'styled-components';

const HeaderMessageStyle = styled.div`
  background-color: ${props => props.theme.graySoft};
  width: 100%;
  display: flex;
  height: 4rem;
  align-items: center;
  padding: 1rem;
  border-radius: 5px 5px 0 0;
  .headerName {
    font-size: 16px;
  }
`;

export default HeaderMessageStyle;
