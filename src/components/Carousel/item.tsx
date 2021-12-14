import React, { useEffect, ReactElement } from "react";
import { ItemProps, ItemImage } from "./props";

import { ItemContainer, ItemContent, ItemHeader, Image, TextTarifa } from "./styles";

import { FormatToReal } from "../../utils";

import AtarIcon from "../../assets/images/service/atar_service_icon.svg";

import PixIcon from "../../assets/images/service/pix-banco-central-logo.svg";

import BankIcon from "../../assets/images/service/bank_service_icon.svg";
import { Console } from "console";

function ItemImageComponent({ type }: ItemImage): ReactElement {
  let image = undefined;
  switch (type) {
    case "pix":
      image = PixIcon;
      break;
    case "atar":
      image = AtarIcon;
      break;
    default:
    case "bank":
      image = BankIcon;
      break;
  }
  return <Image height="70%" src={image} style={{ maxHeight: "200px" }} />;
}

function ItemComponent({ item, key, onClick }: ItemProps): ReactElement {
  let isFree = Number(item.fee?.absolut) > 0 && Number(item.fee?.percent) > 0;
  return (
    <ItemContainer key={key}  className="card ps-5 pe-5">
      <div className="row content">
        <ItemContent>
            <ItemImageComponent type={item?.type} />
            <div className="sub-title">aguarde alguns instantes...</div>
          </ItemContent>
      </div>
      
      
    </ItemContainer>
  );
}

export default ItemComponent;
