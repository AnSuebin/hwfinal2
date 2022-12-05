import React from "react";
import Header from "../header/Header";
import styled from "styled-components";

const Container = styled.div`
  min-width: 800px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Layout = ({ children }) => {
  return (
    <Container>
      <Header />
      {children}
    </Container>
  );
};
export default Layout;
