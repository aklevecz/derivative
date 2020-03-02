import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { UIState, State } from "../store";

interface StyleProps {
  mobile: boolean;
}
const H = styled.div`
  display: grid;
  grid-template-columns: 15% 1fr 15%;
  font-size: 4rem;
  text-align: center;
`;

const Ham = styled.div`
  font-size: 2rem;
  font-weight: bold;
  line-height: 54px;
  padding-left: 26%;
`;

const Title = styled.div`
  grid-column: ${(p: StyleProps) => (p.mobile ? "2" : "1/span2")};
  font-size: ${(p: StyleProps) => (p.mobile ? "3rem" : "4rem")};

  padding: 0 8%;
`;

interface Props {
  dispatch: Function;
  title: string;
  ui: UIState;
}

const Header = ({ dispatch, title, ui }: Props) => {
  return (
    <H>
      {ui.mobile && (
        <Ham onClick={() => dispatch({ type: "OPEN_NAV" })}>///</Ham>
      )}
      <Title mobile={ui.mobile}>{title}</Title>
    </H>
  );
};

const mapStateToProps = ({ ui }: State) => ({
  ui
});

const mapDispatchToProps = (dispatch: Function) => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(Header);
