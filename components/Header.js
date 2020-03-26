import Link from "next/link";
import styled from "styled-components";
import NProgress from "nprogress";
import Router from "next/router";

Router.onRouteChangeStart = () => {
  console.log("route change started");
  NProgress.start();
};

Router.onRouteChangeComplete = () => {
  console.log("route change complete");
  NProgress.done();
};

Router.onRouteChangeError = () => {
  console.log("route change error");
  NProgress.done();
};

const StyledHeader = styled.header`
  width: 100%;
  text-align: center;
  padding: 70px 0;
  border-bottom: 1px solid crimson;

  a {
    color: crimson;
  }
`;

const Header = () => (
  <StyledHeader>
    <Link href="/">
      <a>COVID APP</a>
    </Link>
  </StyledHeader>
);

export default Header;
