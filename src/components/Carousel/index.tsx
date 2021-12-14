import React, { useEffect, ReactElement } from "react";
import "react-multi-carousel/lib/styles.css";
import { useHistory } from "react-router-dom";

import { Item, ListItems } from "../../store/modules/general/types";
import { Carousel } from "./props";

import ItemComponent from "./item";

import { Container, Content } from "./styles";

function CarouselComponent({ items, type }: Carousel): ReactElement {
  const history = useHistory();
  return (
    <Container>
      <Content>
        {items.map((item: Item) => (
          <ItemComponent
            item={item}
            onClick={() => history.push(`/${type}/info/${item.type}`)}
          />
        ))}
      </Content>
    </Container>
  );
}

export default CarouselComponent;
