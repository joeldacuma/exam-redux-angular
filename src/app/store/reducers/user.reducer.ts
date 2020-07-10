import { User } from '../../models/user.model';
import { Injectable } from '@angular/core';
import * as Users from '../../actions/user.action';

export interface State {
  data: any;
  loading: boolean;
  error: any;
}

export const initialState: State = {
  data: [],
  loading: false,
  error: null
}

export function reducer(state = initialState, action: Users.Actions): State {
  switch(action.type) {
    case Users.ActionTypes.LOAD:
      return {...state, loading: true, error: null }
    case Users.ActionTypes.LOAD_SUCCESS:
      return {...state, loading: false, data: action.payload }
    default:
      return state;
  }
}

export const getUsers = (state: State) => state.data;