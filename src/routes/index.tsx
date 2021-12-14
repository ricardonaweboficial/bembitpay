import React from "react";
import { Route, Router } from "react-router-dom";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import history from "../services/history";
import { GeneralState } from "../store/modules/general/types";
import { AnimatedSwitch, spring } from "react-router-transition";

import Home from "../pages/Home";

import Deposit from "../pages/Deposit";
import Sales from "../pages/Sales";
import SalesConfirm from "../pages/SalesConfirm";
import SalesDone from "../pages/SalesDone";
import DepositAtar from "../pages/DepositAtar";
import DepositAtarConfirm from "../pages/DepositAtarConfirm";
import DepositAtarDone from "../pages/DepositAtarDone";
import DepositBank from "../pages/DepositBank";
import DepositBankDone from "../pages/DepositBankDone";
import DepositBankConfirm from "../pages/DepositBankConfirm";

import DepositPix from "../pages/DepositPix";
import DepositPixConfirm from "../pages/DepositPixConfirm";
import DepositPixDone from "../pages/DepositPixDone";
import DepositCancel from "../pages/DepositCancel";

import Header from "../components/Header";
import { LoadingAnimation } from "../components/Animation";
import { Container, HeaderContainer, LoadingContainer } from "./styles";

// we need to map the `scale` prop we define below
// to the transform style property
function mapStyles(styles: any) {
  return {
    opacity: styles.opacity,
    transform: `scale(${styles.scale})`,
  };
}

// wrap the `spring` helper to use a bouncy config
function bounce(val: number) {
  return spring(val, {
    stiffness: 330,
    damping: 22,
  });
}

// child matches will...
const bounceTransition = {
  // start in a transparent, upscaled state
  atEnter: {
    opacity: 0,
    scale: 1.2,
  },
  // leave in a transparent, downscaled state
  atLeave: {
    opacity: bounce(0),
    scale: bounce(0.8),
  },
  // and rest at an opaque, normally-scaled state
  atActive: {
    opacity: bounce(1),
    scale: bounce(1),
    display: "block",
  },
};

export default function Routes() {
  const { loading }: GeneralState = useSelector(
    (state: any) => state.general,
    shallowEqual
  );

  return (
    <Router history={history}>
      <HeaderContainer>
        <Header />
      </HeaderContainer>

      <Container>
        {loading && (
          <LoadingContainer className="loading">
            <LoadingAnimation width={100} height={100} />
          </LoadingContainer>
        )}
        <AnimatedSwitch
          atEnter={bounceTransition.atEnter}
          atLeave={bounceTransition.atLeave}
          atActive={bounceTransition.atActive}
          mapStyles={mapStyles}
        >
          <Route path="/" exact component={Home} />
          <Route path="/deposit/:token" exact component={Deposit} />
          <Route path="/sale" exact component={Sales} />
          <Route path="/sale/confirm" exact component={SalesConfirm} />
          <Route path="/sale/done" exact component={SalesDone} />
          <Route path="/deposit/info/pix" exact component={DepositPix} />
          <Route
            path="/deposit/info/pix/done"
            exact
            component={DepositPixDone}
          />
          <Route
            path="/deposit/info/pix/confirm"
            exact
            component={DepositPixConfirm}
          />
          <Route path="/deposit/info/bank" exact component={DepositBank} />
          <Route
            path="/deposit/info/bank/done"
            exact
            component={DepositBankDone}
          />
          <Route
            path="/deposit/info/bank/confirm"
            exact
            component={DepositBankConfirm}
          />
          <Route path="/deposit/info/atar" exact component={DepositAtar} />
          <Route
            path="/deposit/info/atar/confirm"
            exact
            component={DepositAtarConfirm}
          />
          <Route
            path="/deposit/info/atar/done"
            exact
            component={DepositAtarDone}
          />

          <Route path="/deposit/info/cancel" exact component={DepositCancel} />
        </AnimatedSwitch>
      </Container>
    </Router>
  );
}
