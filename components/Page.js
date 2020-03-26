import React, { Component } from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import Header from "./Header";
import Meta from "./Meta";

const theme = {
  red: "crimson",
  black: "#393939",
  grey: "#3A3A3A",
  white: "#FFFFFF",
  lightgrey: "#E1E1E1",
  offWhite: "#EDEDED",
  maxWidth: "80%",
  bs: "0 12px 24px 0 rgba(0, 0, 0, 0.09)"
};

const StyledPage = styled.div`
  background: transparent;
`;

const Inner = styled.div`
  margin: 0 auto;
`;

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 1.2;
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 300;
  }
  a {
    text-decoration: none;
    color: inherit;
    font-family: 'Source Sans Pro', sans-serif;
    transition: color .2s ease-in-out,background-color .2s ease-in-out,border-bottom-color .2s ease-in-out;
  }
  p {
    font-family: 'Open Sans Condensed', sans-serif;
  }
`;

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <Meta />
          <div className="page-container">
            <Header />
            <Inner>{this.props.children}</Inner>
          </div>
        </StyledPage>
        <GlobalStyle />
      </ThemeProvider>
    );
  }
}

export default Page;
