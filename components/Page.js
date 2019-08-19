import React, { Component } from 'react';
import Header from './Header';
import Meta from './Meta';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';

const theme = {
  white: '#fff',
  black: '#000',
  gray: '#ccc',
  grayHard: '#333',
  graySoft: '#ededed',
  blue: '#3483fa',
  maxWidth: '1200px'
};

const StyledPage = styled.div`
  display: 'flex';
`;

const Inner = styled.div`
  padding: 1rem;
`;

injectGlobal`
  @font-face {
    font-family: 'Proxima Nova Regular';
    font-style: normal;
    font-weight: normal;
    src: local('Proxima Nova Regular'), url('../static/ProximaNova-Regular.woff') format('woff');
  }
  @font-face {
    font-family: 'Proxima Nova Bold';
    font-style: normal;
    font-weight: normal;
    src: local('Proxima Nova Bold'), url('../static/ProximaNova-Bold.woff') format('woff');
  }
  html {
    box-sizing: border-box;
    font-size: 14px;
    color: ${theme.grayHard};
    background-color: ${theme.graySoft};
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    font-family: 'Proxima Nova Regular';
  }
  a {
    text-decoration: none;
  }
  button {  font-family: 'Proxima Nova Regular'; }
`;

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <Meta />
          <Header />
          <Inner>{this.props.children}</Inner>
        </StyledPage>
      </ThemeProvider>
    );
  }
}

export default Page;
