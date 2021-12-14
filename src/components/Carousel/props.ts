
import { Item } from '../../store/modules/general/types'

import { ListItems } from "../../store/modules/general/types"


export interface ItemProps {
    item: Item
    key?: number
    onClick:Function
}
export interface ItemImage {
    type? : string
}


export interface ItemImage {
    type? : string
}

export interface Carousel {
    items : ListItems
    type? : string
}






