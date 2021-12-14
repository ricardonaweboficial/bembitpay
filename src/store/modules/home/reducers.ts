import produce from "immer";

import {
  HomeState,
  HomeActionTypes,
  HOME_INITIAL,
} from './types'


const initialState: HomeState = {
  home: []
}
export default function home(state = initialState, action:HomeActionTypes) {
  switch (action.type) {
    case HOME_INITIAL:
      return produce(state, draft => {
       
      });
    default:
      return state;
  }
}
