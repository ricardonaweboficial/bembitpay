import React, { useEffect, ReactElement } from "react";

import { HeaderContainer, LogoImage } from "./styles";
import Logo from "../../assets/images/logo-white.svg";

function Header(): ReactElement {
  return (
    <HeaderContainer href="https://Lightdefi.org">
      <LogoImage src={Logo} />
    </HeaderContainer>
  );
}

export default Header;
