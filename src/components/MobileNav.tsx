import React, { Fragment } from "react";
import styled from "styled-components";
import { createPortal } from "react-dom";
import { StyledLink } from "./styles/styles";
import { State, UIState } from "../store";
import { connect } from "react-redux";

interface StyleProps {
  left: string;
}

const MobileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  z-index: 5;
  position: absolute;
  left: ${(p: StyleProps) => p.left};
  transition: left 1s;
  width: 130px;
  text-align: right;
`;

const Container = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.2);
  color: #fff;
`;

interface Props {
  dispatch: Function;
  ui: UIState;
}

const MobileNav = ({ dispatch, ui }: Props) => {
  const left = ui.openNav ? "0px" : "-150px";
  return createPortal(
    <Fragment>
      <Container
        style={{ display: ui.openNav ? "block" : "none" }}
        onClick={() => dispatch({ type: "CLOSE_NAV" })}
      />
      <MobileWrapper left={left}>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/shop">Shop</StyledLink>
        <StyledLink to="/about">About</StyledLink>
      </MobileWrapper>
    </Fragment>,
    document.getElementById("nav-root") as any
  );
};

const mapStateToProps = ({ ui }: State) => ({
  ui
});

export default connect(mapStateToProps)(MobileNav);
