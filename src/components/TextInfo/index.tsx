import React, { useEffect, ReactElement } from "react";
import { TextInfoProps } from "./props";

import { TextInfo } from "./styles";

function TextComponent({
  label,
  text
}: TextInfoProps): ReactElement {
  return (
    <TextInfo className="mb-2">
      <span>{label}: </span><strong>{text}</strong>
    </TextInfo>
  );
}

export default TextComponent;
