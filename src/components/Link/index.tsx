import React, { useEffect, ReactElement } from "react";
import "react-multi-carousel/lib/styles.css";
import { LinkProps } from "./props";

import { Link } from "./styles";

function LinkComponent({
  text,
  link,
  target,
  styleLink,
}: LinkProps): ReactElement {
  return (
    <Link style={styleLink} href={link} target={target}>
      {text}
    </Link>
  );
}

export default LinkComponent;
