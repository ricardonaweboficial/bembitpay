
export interface CreateHome {
    name: string
}

export interface Home {
  name: string
}


export interface HomeState {
  home: Home[]
}
  

export const HOME_INITIAL = '@home/INITIAL'

interface InitialAction {
  type: typeof HOME_INITIAL
  payload: CreateHome
}

export type HomeActionTypes = InitialAction