  import { ActionReducer,
        ActionReducerMap,
        createFeatureSelector,
        createSelector,
        MetaReducer } from "@ngrx/store";
  import * as userData from './user.reducer';
  
  export interface Appstate {
    data: userData.State;
  }

  export const reducers: ActionReducerMap<Appstate> = {
    data: userData.reducer
  };

  export const getDataState = (state: Appstate) => state.data;
  export const getData = createSelector(getDataState, userData.getUsers);