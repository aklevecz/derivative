import React, { useState, useEffect, Fragment } from "react";
import styled from "styled-components";
import MobileNav from "./MobileNav";
import { StyledLink } from "./styles/styles";

const LinkWrapper = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: space-evenly;
`;

interface Props {}

// using redux could allow the hamburger to be on the header and trigger the nav roll out
const Nav = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    window.addEventListener("resize", () =>
      setIsMobile(window.innerWidth < 768)
    );
  }, []);

  return (
    <Fragment>
      {isMobile ? (
        <MobileNav />
      ) : (
        <LinkWrapper>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/shop">Shop</StyledLink>
          <StyledLink to="/about">About</StyledLink>
        </LinkWrapper>
      )}
    </Fragment>
  );
};

export default Nav;
