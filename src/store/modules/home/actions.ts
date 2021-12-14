import { HOME_INITIAL, CreateHome, HomeActionTypes } from './types'

export function initial() {
    return {
      type: HOME_INITIAL,
      payload: {  }
    };
  }


export function updateSession(createHome: CreateHome): HomeActionTypes {
  return {
    type: HOME_INITIAL,
    payload: createHome
  }
}