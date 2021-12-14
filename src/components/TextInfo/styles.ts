import styled from "styled-components";

import { device, size } from "../../styles/device";

export const TextInfo = styled.div`
  span {
    font-size: 18px;
    color: ${(props) => props.theme.color.gray4};
  }

  strong {
    font-size: 18px;
    color: ${(props) => props.theme.color.gray5};
    word-break: break-word;
  }
`;
